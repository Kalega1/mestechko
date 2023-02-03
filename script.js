class MyString{
  constructor(){

  }
  reverse(str){
    let reverse = ''
    let i = str.length - 1
    for (i;i >=0;i--){
        reversStr +=str[i]
    }
    return reversStr
  }
  ucFirst(str){
    return str[0].toUpperCase
    }
}