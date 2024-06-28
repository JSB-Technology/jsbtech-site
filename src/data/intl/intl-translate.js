const axios = require('axios');
const fs = require('fs');

const apiKey = 'AIzaSyAEb75L7z_qn77v-tYoMjaCSds4rAd6ZnY';  // 替换为你的 Google Translate API 密钥
const targetLanguage = 'zh';  // 目标语言代码，如西班牙语为 'es'

// 读取原始 JSON 文件
const data = JSON.parse(fs.readFileSync('en.json', 'utf8'));

// 准备翻译请求
const translateText = async (text) => {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const response = await axios.post(url, {
    q: text,
    target: targetLanguage
  });
  return response.data.data.translations[0].translatedText;
};

// 递归遍历对象并翻译值部分
const translateObject = async (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = await translateText(obj[key]);
    } else if (typeof obj[key] === 'object') {
      await translateObject(obj[key]);
    }
  }
};

// 翻译数据并保存到新文件
(async () => {
  await translateObject(data);
  fs.writeFileSync(`translated_${targetLanguage}.json`, JSON.stringify(data, null, 2));
  console.log(`Translation to ${targetLanguage} completed.`);
})();
