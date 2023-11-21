var cl = {}

const envirment = process.env.ENV || "DEVELOPMENT",
      isPro = envirment == "PRODUCTION",
      isDev = envirment == "DEVELOPMENT"

cl.p = isPro ? console.log : ()=>{};
cl.d = isDev ? console.log : ()=>{};
cl.dp = console.log


module.exports = cl
