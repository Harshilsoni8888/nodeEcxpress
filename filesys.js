const fs = require('fs');




// const data = fs.readFileSync('nnew.txt').toString();
// console.log(data);

const volume ='hhsdgh';
fs.writeFileSync('nnew.txt',volume);


const data = fs.readFileSync('nnew.txt').toString()


http.createServer(function(req,res)
    {
        {
            if (req.url == '/') {
                const about = fs.readFileSync('./home.html')
                res.write(about)
            }
            else if(req.url == '/about') {
                const home = fs.readFileSync('./about.html')
                res.write(home)
            }
        }

        
    }
)app.listen(8079)

