const xlsx = require('xlsx');
const path = require('path');

const db = []
const createUser = (data) => {// функция для создание пользователя 
    return{
        username: "test",
        name: data.InitialProductName,
        brand: data.Brand,
        description: data.ProductDescription || '',
        type: data.ItemType,
        price: data.TotalPrice,
        category: data.Category,
        images:[
            data.ProductImageFile1,
            data.ProductImageFile2,
        ]
    }
}

const readExcelFile = (filePath) =>{ // функция для чтения Excel файла
    const fileExcel = path.resolve(__dirname, filePath)// ссылка на файл
    return new Promise((resolve, reject) =>{
        const workbook = xlsx.readFile(fileExcel)// чтение Excel файла
        const sheetNames = workbook.SheetNames;// доступ к таблицам 
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])// преоброзование в JSON формат   
        resolve(data)
    })
}

readExcelFile('./FLProductMasterfile.xlsx')
    .then(res => res.map(item => {
        //db.push(createUser(item))
    }))
    .then(() =>{
        console.log(db);
    })


