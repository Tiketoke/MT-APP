export default {
  dbs:'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return 6379
    }
  },
  smtp:{      //邮箱
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '2293432086@qq.com'
    },
    get pass(){
      return 'rigitzaixbtddjhc'
    },
    get code(){
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }
}
// POP3 密码：tghaufqrhrfteacd
// IMAP密码： rseovkfnfmabdjfg
//exchange服务 yftgeuiwcdxmebce
//carddav  fzwkkvfzhwhgeche
//授权码   rigitzaixbtddjhc
