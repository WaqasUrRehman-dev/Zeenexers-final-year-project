import AdminHeader from "../../components/AdminLayout/AdminHeader";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import { fetchData } from "./utils";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [totalProducts, setTotalProducts] = useState("0");
  const [totalUsers, setTotalUsers] = useState("0");
  const [totalPurchases, setTotalPurchases] = useState("0");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData(
      setTotalProducts,
      setTotalUsers,
      setTotalPurchases,
      setLoading,
      navigate
    );
  }, []);
  const customerPurchaseData = [
    { date: "2024-01-01", customers: 150, purchases: 220 },
    { date: "2024-02-01", customers: 180, purchases: 280 },
    { date: "2024-03-01", customers: 200, purchases: 310 },
    { date: "2024-04-01", customers: 230, purchases: 350 },
    { date: "2024-05-01", customers: 250, purchases: 380 },
  ];

  const liveProductData = [
    { date: "2024-01-01", products: 5 },
    { date: "2024-02-01", products: 6 },
    { date: "2024-03-01", products: 5 },
    { date: "2024-04-01", products: 8 },
    { date: "2024-05-01", products: 10 },
  ];

  const productCategoryData = [
    { category: "Electronics", quantity: 120 },
    { category: "Clothing", quantity: 80 },
    { category: "Home & Kitchen", quantity: 60 },
    { category: "Books", quantity: 40 },
    { category: "Beauty", quantity: 30 },
  ];

  const genderDistributionData = [
    { gender: "Male", count: 185 },
    { gender: "Female", count: 115 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="w-full mx-auto">
      {loading ? (
        <div className="w-screen h-screen justify-center items-center">
          <InfinitySpin
            visible={loading}
            width="600"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          <AdminHeader />
          <main className="main-container">
            <div className="main-title">
              <h3>DASHBOARD</h3>
            </div>
            <div className="main-cards w-full container mx-auto">
              <div className="card">
                <div className="card-inner">
                  <h3>Products</h3>
                  <BsFillArchiveFill className="card_icon" />
                </div>
                <h1>{loading ? "Loading..." : totalProducts}</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>Purchases</h3>
                  <BsFillGrid3X3GapFill className="card_icon" />
                </div>
                <h1>{loading ? "Loading..." : totalPurchases}</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>Customers</h3>
                  <BsPeopleFill className="card_icon" />
                </div>
                <h1>{loading ? "Loading..." : totalUsers}</h1>
              </div>
            </div>
            <div className="charts">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={customerPurchaseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="customers" fill="#8884d8" name="Customers" />
                  <Bar dataKey="purchases" fill="#82ca9d" name="Purchases" />
                </BarChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={liveProductData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="products"
                    stroke="#ffc658"
                    name="Live Products"
                  />
                </LineChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productCategoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quantity" fill="#3498db" />
                </BarChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderDistributionData}
                    dataKey="count"
                    nameKey="gender"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {genderDistributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Admin;
