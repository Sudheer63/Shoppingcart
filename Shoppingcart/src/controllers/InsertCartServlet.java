package controllers;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dbcon.DB_Properties;
import dbcon.StoreDAO;
import model.Items;

@WebServlet("/InsertCartServlet")

public class InsertCartServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		StoreDAO gap = null;
		try {
			gap = new DB_Properties();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		List<Items> i = new ArrayList<>();
		boolean hasData = true;
		int val = Integer.parseInt(request.getParameter("length"));
		while (val > 0) {
			String proid = request.getParameter("proid");
			String quantity = request.getParameter("quantity");
			String price = request.getParameter("price");
			price = price.replace(".", " ");
			if (proid != null && (quantity != null && price != null)) {
				Items it = new Items(Integer.parseInt(proid), Integer.parseInt(quantity), Long.parseLong(price));
				i.add(it);
			}
			val--;
		}
		for (Items item : i) {
			System.out.println(item.getPrice());
		}
		try {
			gap.createOrder(101, i);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}