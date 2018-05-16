import styles from './greeter.css'; // 导入
var config = require('./config.json');
module.exports = () => {
    let greet = document.createElement('div');
    greet.setAttribute('class', styles.test) // 设置class -> greeter__test--1F6gy
    greet.textContent = config.greetText
    return greet;
}