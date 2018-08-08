'use strict'

const Calculator = {

  // the async-await is an alternative to promises
  async calculate (req, res, next) {
      try {
        console.log(req.body)

        // make sure that the request has the necessary body items
        if (!req.body.bottlePrice) {
          throw new Error('Bottle price not found')
        }
        if (!req.body.bottleSize) {
          throw new Error('Bottle size not found')
        }
        if (!req.body.pourAmount) {
          throw new Error('Pour Amount not found')
        }
        if (!req.body.liquorCostPercentage) {
          throw new Error('Liquor cost percentage not found')
        }

        let beverageCost = 0

        if(req.body.bottleSize === 750){
          beverageCost = ((req.body.bottlePrice/25.4)*req.body.pourAmount)/(req.body.liquorCostPercentage/100)
        }else if(req.body.bottleSize === 1000){
          beverageCost = ((req.body.bottlePrice/33.8)*req.body.pourAmount)/(req.body.liquorCostPercentage/100)
        }else if(req.body.bottleSize === 1750){
          beverageCost = ((req.body.bottlePrice/59.2)*req.body.pourAmount)/(req.body.liquorCostPercentage/100)
        }
        beverageCost = Math.round(beverageCost*100)/100 // round to two decimal places

        res.json({
          beverageCost: beverageCost
        })

      }catch (e) {
        res.sendStatus(500)
        console.log('error! ', e)
        next(e)
      }
  },
}

module.exports = Calculator
