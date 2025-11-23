[[Odoo|Odoo]] Databases uses JSON Files, in order to extract values from a JSON file using a key, the folowing: 
```
SELECT {REG}->> {'KEY'}
	FROM {TABLE}
```
## SQL W/ JOIN

```
SELECT p.name AS "Nombre Cliente",
    s.name AS "Num.presupuesto",
    l.name AS "Producto",
    l.product_uom_qty,
    l.price_total,
    l.currency_id,
    c.name AS "Moneda"
   FROM sale_order s
     JOIN sale_order_line l ON l.order_id = s.id
     JOIN res_partner p ON s.partner_id = p.id
     JOIN res_currency c ON l.currency_id = c.id
  ORDER BY s.name;
  ```
