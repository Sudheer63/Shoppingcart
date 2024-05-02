package model;

public class Items {
	private int proid;
	private int quantity;
	private long price;

	public Items(int proid, int quantity, long price) {
		this.proid = proid;
		this.quantity = quantity;
		this.price = price;
	}

	public int getProid() {
		return proid;
	}

	public void setProid(int proid) {
		this.proid = proid;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product{" + "proid=" + proid + ", quantity=" + quantity + ", price=" + price + '}';
	}
}
