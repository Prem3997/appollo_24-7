export const isLogin = () => {
  console.log(localStorage.getItem("loggedIn")==='true')
    if (localStorage.getItem("loggedIn") === 'true')
      return true
   else 
      return false
}
