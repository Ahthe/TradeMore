export const PaperTradingGame = {
    tickLength: 1500,

    newGame(
        playerName: string,
        onUpdate?: (game: BeanCoinGameState) => void
    ): BeanCoinGameState {
        return {
            phase: 'lobby',
            player: this.newPlayer(playerName),
            priceData: this.generatePriceData(),
            tick: 0,
            onUpdate
        }
    },

	startGame(game: BeanCoinGameState): number | undefined {
            if (game.phase === 'lobby') {
                game.phase = 'playing'
                game.onUpdate?.(game)
                return setInterval(() => this.updateGame(game), this.tickLength)
            }
            return undefined
        },

    buyIn(game: BeanCoinGameState) {
        if (game.phase === 'playing') {
            game.player.costBasis = game.priceData[game.tick]
            game.player.shares = game.player.cash / game.priceData[game.tick]
            game.player.cash = 0
            game.onUpdate?.(game)
        }
    },

    sellAll(game: BeanCoinGameState) {
        if (game.phase === 'playing') {
            game.player.cash = game.player.shares * game.priceData[game.tick]
            game.player.shares = 0
            game.player.costBasis = 0
            game.onUpdate?.(game)
        }
    },

    updateGame(game: BeanCoinGameState) {
        if (game.phase === 'playing') {
            if (game.tick < game.priceData.length - 1) {
                game.tick++
                game.onUpdate?.(game)
            } else {
                game.phase = 'gameOver'
                game.onUpdate?.(game)
            }
        }
    },

    newPlayer(name: string): PlayerState {
        return {
            name,
            cash: 100,
            shares: 0,
            costBasis: 0
        }
    },

    generatePriceData(): number[] {
        const maxRise = 0.07
        // const bullProb = 0.6
        const marketSentimentVals = [-7, -1, 1, 3]
        const marketSentimentProbs = [0.1, 0.2, 0.8, 1]
        const numTurns = 30
        let lastPrice = 10

        let sentiment = marketSentimentVals[2]
        return Array.from({ length: numTurns }, (_, i) => {
            if (i === 0) return lastPrice

            const movementPercent = (Math.random() * maxRise) * sentiment
            lastPrice += lastPrice * movementPercent
            lastPrice = Math.max(0, lastPrice)

            const diceRoll = Math.random()
            sentiment = marketSentimentVals[marketSentimentProbs.findIndex(it => diceRoll < it)]
            return lastPrice
        })
    }
}

export const PaperTradingUtils = {
    playerAccountValue(player: PlayerState, pricePerShare: number): number {
        return player.cash + player.shares * pricePerShare
    },

    priceMovementPercentage(game: { tick: number, priceData: number[] }): number {
        if (game.tick === 0) return 0
        return this.percentChange(game.priceData[game.tick - 1], game.priceData[game.tick])
    },

    percentChange(before: number, after: number): number {
        return (after - before) / before * 100
    }
}

export interface BeanCoinGameState {
	phase: 'lobby' | 'playing' | 'gameOver'
	player: PlayerState
	priceData: number[]
	tick: number
	onUpdate?: (game: BeanCoinGameState) => void
}

export interface PlayerState {
	name: string
	cash: number
	shares: number
	costBasis: number
}