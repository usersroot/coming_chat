const express = require('express')


const router = express.Router()



// 创建接口 

router.get('/home',( req,res,next ) => {
  res.json({
    state:200,
    info:'获取成功'
  })
})


module.exports = router