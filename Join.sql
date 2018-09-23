--Cartesian Product
select * from item cross join material;
select * from item, material;

--Inner Join
select * from item inner join material on item.materialid = material.materialid;
select * from item, material where item.materialid = material.materialid;

--Left Join
select * from item left outer join material on item.materialid = material.materialid;
select * from item left join material on item.materialid = material.materialid;

--Right Join
select * from item right outer join material on item.materialid = material.materialid;
select * from item right join material on item.materialid = material.materialid;

--Full Join (คือเอาผลลัพธ์ของทั้ง Left Join และ Right Join มา Union กัน แต่ไม่ใช่ Cartesian Product)
select * from item full outer join material on item.materialid = material.materialid;
select * from item full join material on item.materialid = material.materialid;