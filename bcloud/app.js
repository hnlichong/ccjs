
const BCloud = require('bcloud');

const myServiceId = 'tt5271xmmm4v2w5n17'; // 在轻服务中创建的服务 ID

// 初始化轻服务实例
const bc = new BCloud({
    serviceId: myServiceId,
});


async function helloTranslate(params, context) {
    const {text, srcLang, tarLang} = params;
    const data = await bc.ai.translate(text, tarLang, srcLang);
    const { translatedText } = data;
    console.log(translatedText);
    return {
        translatedText, // 输出：hello
    };
}

async function helloKeyPhrase(params, context) {
    const {title, content} = params
    const data = await bc.ai.keyphrase(title, content);
    const { result } = data;
    return {
        result
    };
}


