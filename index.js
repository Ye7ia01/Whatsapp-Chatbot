const qrcode = require('qrcode-terminal');


const q1_papers_prices = '1';
const q2_online = '2'; 
const q3_online_payment = '3';
const q4_branches = '4';

const q5_unblock = '5';
const q6_technical_support = '6';
const technical_support_message = '7- ارسل الرمز 7 لخطوات و برنامج التفعيل \n 8- ارسل الرمز 8 للارشادات عن منظومة الفاتورة الالكترونية \n 0- ارسل الرمز 0 للرجوع للقائمة الرئيسية';

const q1_technical_activation = '7';
const q2_technical_einvoice = '8';
const q1_einvoice = '9';
const q2_einvoice = '10';
const mainmenu = '0';
 
const einvoice_msg_1 = 'قبل استفسارات الدعم الفنى فيما يتعلق بمظومة الفاتورة الالكترونية, يرجى التاكد من وجود Windows 10 و متصفح Google Chrome \n';
const einvoice_msg_2 = '9- ارسل الرمز 9 لخطوات التسجيل الذاتى على منظومة الفاتورة الالكترونية \n 10- ارسل الرمز 10 لمصدر برنامج التوقيع على الفواتير الالكترونية لربط انظمة ERP  مع المنظومة \n';

const { Client , LocalAuth, MessageMedia, Location} = require('whatsapp-web.js');
const client = new Client({
    authStrategy : new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {



    const msg = message.body;


        if(msg == q1_papers_prices) {
            message.reply("لمعرفة الأسعار و المستندات المطلوبة, يرجى اتباع الرابط التالى bit.ly/3MYwAyt");
            message.reply(" لتحميل النماذج و العقد و صيغة التفويض , يرجى اتباع الرابط التالى http://bit.ly/3jt5W7E " );    

        }

        else if(msg == q2_online) {
            message.reply("للتقديم اونلاين , ارسل المستدات عن طريق البريد الالكترونى Info-ca@mcsd.com.eg");
        }

        

        else if(msg == q3_online_payment) {
            message.reply(" للدفع الالكترونى برقم المطالبة, يرجى اتباع الرابط التالى http://bit.ly/3HBN1PM او السداد عن طريق فورى برقم الخدمة 778");

        }

        else if(msg == q4_branches) {
            message.reply(" لمعرفة اقرب فرع لك, يرجى اتباع الرابط التالى http://bit.ly/3HBN1PM");
        }

        else if(msg == q5_unblock) {

            message.reply(" لفتح قفل الشهادة, يرجي تنزيل البرنامج التالى  https://www.mcsd.com.eg/mcdr/ca/Epass2003-Unlock.zip و طلب خدمة العملاء على 25971666" );

        }
        else if(msg == q6_technical_support) {
            message.reply(technical_support_message);
        }
    

        else if(msg == q1_technical_activation) {
            message.reply("للتفعيل علي windows , يرجى تنزيل و تسطيب البرنامج من الرابط التالي https://www.mcsd.com.eg/mcdr/ca/EPass_2003/New_ePass2003_11.zip");
            message.reply("للتفعيل علي MAC , يرجى تنزيل و تسطيب البرنامج من الرابط التالي  https://www.mcsd.com.eg/mcdr/ca/EPass_2003/ePass2003-Castle-mac-20210127.zip و للخطوات الارشادية للتفعيل يرجى اتباع الرابط التالى https://www.mcsd.com.eg/mcdr/ca/EPass_2003/Setup_Mac_for_DSC.zip");
        }

        else if(msg == q2_technical_einvoice) {
            message.reply(einvoice_msg_1);
            message.reply(einvoice_msg_2);
        }


        else if(msg == q1_einvoice) {
            message.reply('لخطوات التسجيل الذاتى , يرجى اتباع الفيديو من خلال الرابط التالى https://drive.google.com/file/d/1GKI98uDM3vwuXXpCZ08sxOyveSjB_LyR/view?usp=share_link');
        }

        else if(msg == q2_einvoice) {
            message.reply('لبرنامج التوقيع للربط مع المنظومة, يرجى اتباع الرابط التالى https://github.com/MCDR-CA/EInvoiceSignerV2_27-10/');
        }


});

client.initialize();
 