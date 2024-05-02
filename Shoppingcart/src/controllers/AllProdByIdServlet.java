package controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import dbcon.DB_Properties;
import dbcon.StoreDAO;
import model.Products;

/**
 * Servlet implementation class AllProdById
 */
@WebServlet("/AllProdByIdServlet")
public class AllProdByIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		StoreDAO gap;
		try {
			gap = new DB_Properties();
			ArrayList<Products> products = null;
			ArrayList<ArrayList<String>> ars = new ArrayList<>();
			JSONObject ob = new JSONObject();
			String id = req.getParameter("val");
			if (id.equals("0")) {
				products = gap.getAllProducts();
			} else {
				products = gap.getAllProductsId(id);
			}
			for (Products it : products) {
				ArrayList<String> temp = new ArrayList<String>();
				temp.add(it.getProduct_id() + "");
				temp.add(it.getProduct_name());
				temp.add(it.getProduct_price() + "");
				temp.add(it.getProduct_image());
				temp.add(it.getProduct_catid() + "");
				ars.add(temp);

			}
			ob.put("AllProducts", ars);
			res.getWriter().write(ob.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}