package model;

public class Products {
	private int Product_id;
	private String Product_name;
	private double Product_price;
	private String Product_image;
	private int Product_catid;

	public int getProduct_catid() {
		return Product_catid;
	}

	public void setProduct_catid(int product_catid) {
		Product_catid = product_catid;
	}

	public int getProduct_id() {
		return Product_id;
	}

	public void setProduct_id(int product_id) {
		Product_id = product_id;
	}

	public String getProduct_name() {
		return Product_name;
	}

	public void setProduct_name(String product_name) {
		Product_name = product_name;
	}

	public double getProduct_price() {
		return Product_price;
	}

	public void setProduct_price(double product_price) {
		Product_price = product_price;
	}

	public String getProduct_image() {
		return Product_image;
	}

	public void setProduct_image(String product_image) {
		Product_image = product_image;
	}
}