/**
 * Created by bjwsl-001 on 2017/6/16.
 */
const pool = require('./pool');
module.exports={
    pageNo:(req,res)=>{
        var pageNo=req.body.pageNo;
        var offset=(pageNo-1)*12;
        //console.log(offset);
        pool.getConnection((err,conn)=>{
            conn.query("select * from vivo_product limit "+offset+",12",(err,result)=>{
                //console.log(result);
                if(err){
                    var data={code:500,msg:'page err 667'};
                }else{
                   var data=result;
                    //console.log(result);

                }
                res.json(data);
                conn.release();
            })
        })
    },
    pageTotal:(req,res)=>{

        pool.getConnection((err,conn)=>{
            //console.log(1);
            conn.query("SELECT count(pid) FROM vivo_product",(err,result)=>{
                //console.log(result);
                if(result){
                    var data={code:200, msg:'pageTotal succ',count:result[0]['count(pid)']};
                   // console.log(result[0].count(pid));
                }else{
                    var data={code:500,msg:'pageTotal err'}
                }
                res.json(data);
                conn.release();
            })

        })
    }
}