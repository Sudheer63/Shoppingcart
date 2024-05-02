CREATE OR REPLACE FUNCTION getgst(prod_id int)
RETURNS numeric
   
AS $$
Declare
		gs numeric;
BEGIN
	SELECT gst into gs from hsncodes225 h Join products225 p on h.hsncode=p.hsncode where p.proid=prod_id;
	return gs;
END
$$ LANGUAGE plpgsql;
select getgst(1)

select * from orders225
select * from orderproducts225
select * from customers225
insert into customers225 values(101,'sudheer','9849520700','12-07-2023','12')
