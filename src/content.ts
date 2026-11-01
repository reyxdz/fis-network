export const facebook =
  "https://www.facebook.com/people/FIS-Network/61573826098900/";

export const facebookName = "FIS Network";

export const phones = [
  {
    label: "Main line",
    display: "0906 172 0663",
    tel: "+639061720663",
  },
  {
    label: "Second line",
    display: "0965 089 9111",
    tel: "+639650899111",
  },
] as const;

export const email = "networkhubfernando28@gmail.com";

export const address = {
  street: "Verian St., Brgy. Palanay",
  town: "Caibiran, Biliran",
};

export const plans = [
  {
    name: "Basic",
    speed: "Up to 25 Mbps",
    price: "₱999",
    period: "each month",
    note: "A small UPS is included, so the connection can stay up for a short time when the power goes out.",
    points: ["Unlimited data", "No hidden charges", "Free installation"],
  },
  {
    name: "Standard",
    speed: "Up to 35 Mbps",
    price: "₱1,499",
    period: "each month",
    popular: true,
    note: "",
    points: ["Free installation"],
  },
  {
    name: "Premium",
    speed: "Up to 50 Mbps",
    price: "₱1,999",
    period: "each month",
    note: "For streaming, gaming, and several people online at once.",
    points: ["Unlimited data", "Priority support", "Free installation"],
  },
  {
    name: "Ultra",
    speed: "Up to 100 Mbps",
    price: "Ask us",
    period: "for the monthly price",
    note: "Tell us what you need. We will quote this plan.",
    points: ["Message or call for the price"],
  },
] as const;
