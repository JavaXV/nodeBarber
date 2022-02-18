var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'barber_db',
    debug: false
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Barder' });
});

/* Test Connection. */
router.get('/testconnection', function(req, res, next){
     if (db != null){
       res.send('Connect Success');
     }else {
       res.send('Connect Fail');
     }
});

router.get('/admin', function(req, res, next){
     db.query('SELECT * FROM barber_tb', function(err, rs){
       res.render('admin', {books: rs});
     });
});

router.get('/admin2', function(req, res, next){
     db.query('SELECT * FROM appointment_tb', function(err, rs){
       res.render('admin2', {books: rs});
     });
});

router.get('/form', function(req, res, next){
      res.render('form', {book: {} });
  });

  router.get('/formAdmin', function(req, res, next){
    res.render('formAdmin', {book: {} });
});

router.get('/formAdmin', function(req, res, next){
  res.render('formAdmin2', {book: {} });
});


router.get('/appointment', function(req, res, next){
      res.render('appointment');
  });

router.get('/contract', function(req, res, next){
      res.render('contract');
  });

router.get('/admin', function(req, res, next){
      res.render('admin');
  });

router.get('/admin2', function(req, res, next){
      res.render('admin2');
  });
  
  router.get('/select', function(req, res, next){
     db.query('SELECT * FROM lb_table', function(err, rs){
       res.render('select', {books: rs});
     });
});

  router.post('/form', function(req, res, next){

     var sql = "INSERT INTO `lb_table`(`name`,`price`) VALUES ('"+req.body.name+"','"+req.body.price+"')";

     // var sql = 'INSERT INTO lb_table SET ?';
      db.query(sql, req.body,function (err, rs) {
              console.log("User dat is inserted successfully ");
              res.send('insert success');
           });
     // res.redirect('/form');
  });

  
    router.get('/delete', function(req, res, next){
     db.query('DELETE FROM lb_table WHERE id=?', req.query.id, function(err, rs){
       //res.send('Delete Successfully');
          res.redirect('/select');
     });
});

router.get('/edit', function(req, res, next){
  db.query('SELECT * FROM lb_table WHERE id=?', req.query.id, function(err, rs){
       res.render('form', {book: rs[0]});
     //  res.redirect('/select');
  })
});

 router.post('/edit', function(req, res, next){

    var param = [
      req.body,
      req.query.id
    ]
   // var sql = "UPDATE lb_table SET name = 'Canyon 123' WHERE address = 'Valley 345'";
 db.query('UPDATE lb_table SET ? WHERE id = ?', param, function(err, rs){
          res.redirect('/select');; // go to page select
 });
});

//---------------------------------------

router.get('/edit1', function(req, res, next){
  db.query('SELECT * FROM barber_tb WHERE id=?', req.query.id, function(err, rs){
       res.render('formAdmin', {book: rs[0]});
     //  res.redirect('/select');
  })
});

 router.post('/edit1', function(req, res, next){

    var param = [
      req.body,
      req.query.id
    ]
   // var sql = "UPDATE lb_table SET name = 'Canyon 123' WHERE address = 'Valley 345'";
 db.query('UPDATE barber_tb SET ? WHERE id = ?', param, function(err, rs){
          res.redirect('/admin'); // go to page select
 });
});

//---------------------------------------

router.get('/edit2', function(req, res, next){
  db.query('SELECT * FROM appointment_tb WHERE id=?', req.query.id, function(err, rs){
       res.render('formAdmin2', {book: rs[0]});
     //  res.redirect('/select');
  })
});

 router.post('/edit2', function(req, res, next){

    var param = [
      req.body,
      req.query.id
    ]
   // var sql = "UPDATE lb_table SET name = 'Canyon 123' WHERE address = 'Valley 345'";
 db.query('UPDATE appointment_tb SET ? WHERE id = ?', param, function(err, rs){
          res.redirect('/admin2'); // go to page select
 });
});

  
  router.post('/contract', function(req, res, next){
      db.query(sql, req.body,function (err, rs) {

     var sql = "INSERT INTO `barber_tb`(`fullname`,`company`,`email`,`phone`,`date`,`lenght`,`comment`) VALUES ('"+req.body.fullname+"','"+req.body.company+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.date+"','"+req.body.lenght+"','"+req.body.comment+"')";

     // var sql = 'INSERT INTO lb_table SET ?';
             // console.log("User dat is inserted successfully ");
             // res.send('insert success');
              res.redirect('/contract');
              res.send('insert success');
           });
     
  });
  
  
    router.post('/appointment', function(req, res, next){

     var sql = "INSERT INTO `appointment_tb`(`fullname`,`lastname`,`email`,`phone`,`date`,`lenght`,`comment`) VALUES ('"+req.body.fullname+"','"+req.body.lastname+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.date+"','"+req.body.day+"','"+req.body.comment+"')";

     // var sql = 'INSERT INTO lb_table SET ?';
      db.query(sql, req.body,function (err, rs) {
             // console.log("User dat is inserted successfully ");
             // res.send('insert success');
              res.redirect('/appointment');
              res.send('insert success');
           });
     
  });

    router.get('/delete1', function(req, res, next){
     db.query('DELETE FROM barber_tb WHERE id=?', req.query.id, function(err, rs){
        //res.send('Delete Successfully');
          res.redirect('/admin');
     });
});
    
      router.get('/delete2', function(req, res, next){
     db.query('DELETE FROM appointment_tb) WHERE id=?', req.query.id, function(err, rs){
       //res.send('Delete Successfully');
          res.redirect('/admin2');
     });
});




module.exports = router;
