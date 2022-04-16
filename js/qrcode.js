var formFieldType = null;

function formType(id) {
    var formBox = document.getElementById('formBlock');
    formFieldType = id;
    console.log(formFieldType);
    switch (id) {

        case 'planText': {
            formBox.innerHTML = '<textarea name="planText" id="planText" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Text Here" ></textarea>';
            break;
        }
        case 'siteUrl': {
            formBox.innerHTML = '<input type="text" name="siteUrl" id="siteUrl" class="form-control m-auto mt-2" placeholder="Enter Site Url Here">';
            break
        }

        case 'Phone': {
            formBox.innerHTML = '<input type="tel" name="Phone" id="Phone" class="form-control m-auto mt-2" placeholder="Enter Phone Number">';
            break
        }

        case 'Vcard': {
            formBox.innerHTML = '<div><div class="row"><div class="col-6"><input type="text" name="fname" id="fname" class="form-control" placeholder="First Name"> </div><div class="col-6"><input type="text" name="lname" id="lname" class="form-control" placeholder="Last Name"></div></div><br><div><input type="tel" name="Mobile" id="Mobile" class="form-control" placeholder="Mobile"></div><br><div class="row"><div class="col-6"><input type="tel" name="Phone" id="Phone" class="form-control" placeholder="Phone"></div><div class="col-6"><input type="text" name="Fax" id="Fax" class="form-control" placeholder="Fax"></div></div><br><div><input type="email" name="Email" id="Email" class="form-control" placeholder="your@email.com"></div><br><div class="row"><div class="col-6"> <input type="Text" name="Company" id="Company" class="form-control" placeholder="Company"></div><div class="col-6"><input type="text" name="Job" id="Job" class="form-control" placeholder="Job"></div></div><br><div><input type="text" name="Street" id="Street" class="form-control" placeholder="Street"></div><br><div class="row"><div class="col-8"><input type="Text" name="City" id="City" class="form-control" placeholder="City"></div><div class="col-4"><input type="text" name="Zip" id="Zip" class="form-control" placeholder="Zip"></div></div><br><div><input type="text" name="State" id="State" class="form-control" placeholder="State"></div><br><div><input type="text" name="Country" id="Country" class="form-control" placeholder="Country"></div><br><div><input type="text" name="Website" id="Website" class="form-control" placeholder="www.your-website.com"></div></div>';
            break;
        }

        case 'App': {
            formBox.innerHTML = '<input type="text" name="App" id="App" class="form-control m-auto mt-2" placeholder="Enter Link to App">';
            break
        }

        case 'Message': {
            formBox.innerHTML = '<input type="tel" name="Phone" id="Phone" class="form-control m-auto mt-2" placeholder="Enter Phone Number Here"><br><textarea name="Message" id="Message" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Message Here"></textarea>';
            break
        }



        default: {
            formBox.innerHTML = '<textarea name="planText" id="planText" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Text Here" ></textarea>';
            break;
        }
    }
    QRCodeGenerator();
}
formType('planText');


function inputValue(id) {
    return document.getElementById(id).value;
}

function QRCodeGenerator() {

    var planText = null;
    var siteUrl = '';
    var fname = '';
    var lname = '';
    var Mobile = '';
    var Phone = '';
    var Fax = '';
    var Email = '';
    var Company = '';
    var Job = '';
    var Street = '';
    var City = '';
    var Zip = '';
    var State = '';
    var Country = '';
    var Website = '';
    var App = '';
    var Message = '';
    var userInput = '';

    switch (formFieldType) {
        case 'planText': {
            planText = inputValue('planText');
            userInput = 'Text:' + planText;
            break;

        }

        case 'siteUrl': {
            siteUrl = inputValue('siteUrl');
            userInput = 'Site Url:' + siteUrl;
            break;

        }

        case 'Phone': {
            Phone = inputValue('Phone');
            userInput = 'Phone:' + Phone;
            break;

        }
        case 'Vcard': {
            fname = inputValue('fname');
            lname = inputValue('lname');
            console.log(fname + lname);
            Mobile = inputValue('Mobile');
            Phone = inputValue('Phone');
            Fax = inputValue('Fax');
            Email = inputValue('Email');
            Company = inputValue('Company');
            Job = inputValue('Job');
            Street = inputValue('Street');
            City = inputValue('City');
            Zip = inputValue('Zip');
            State = inputValue('State');
            Country = inputValue('Country');
            Website = inputValue('Website');
            userInput = 'First Name:' + fname + '\n' + 'Last Name:' + lname + '\n' + 'Mobile:' + Mobile + '\n' + 'Phone:' + Phone + '\n' + 'Fax:' + Fax + '\n' + 'Email:' + Email + '\n' + 'Company:' + Company + '\n' + 'Job:' + Job + '\n' + 'Street:' + Street + '\n' + 'City:' + City + '\n' + 'Zip:' + Zip + '\n' + 'State:' + State + '\n' + 'Country:' + Country + '\n' + 'Website:' + Website + '\n';
            console.log(userInput);
            break;

        }
        case 'App': {
            App = inputValue('App')
            userInput = 'App Link:' + App;
            break;

        }

        case 'Message': {
            Phone = inputValue('Phone')
            Message = inputValue('Message')
            userInput = 'Phone:' + Phone + '\n' + 'Message:' + Message;
            break;

        }


        default: {
            planText = inputValue('planText');
            userInput = 'Text:' + planText;
            break;
        }
    }


    var element = document.getElementById('qrcode');
    element.innerHTML = '';
    let qrcode = new QRCode(element, {
        text: userInput ? userInput : 'www.udemy.com',
        width: 250,
        height: 250,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

}


function copyQR() {
    var img = document.querySelector('#qrcode').querySelector('img');
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob((blob) => {
        navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
        ]);
    }, 'image/png');



}

function downloadQR() {
    var img = document.querySelector('#qrcode').querySelector('img').src;
    var link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = img;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}