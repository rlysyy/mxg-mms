module.exports={
    devServer:{
        port:8888,
        host:"localhost",
        https:false,
        open:true,

        // proxy:{
        //     [process.env.VUE_APP_BASE_API]:{
        //         target:process.env.VUE_APP_SEVICE_URL,
        //         changeOrigin: true,
        //         pathRewrite:{
        //             ['^' + process.env.VUE_APP_BASE_API]:'',
        //         }
        //     }
        // }
    },
    lintOnSave:false,
    productionSourceMap:false,
}