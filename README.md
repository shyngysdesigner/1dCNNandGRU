# 1D CNN + GRU Traffic Prediction Model

A powerful spatial-temporal deep learning model built with PyTorch to predict traffic flow dynamically.

## 🚀 Overview
Predicting traffic flow is a notoriously noisy and complex problem. This project implements a **Hybrid CNN-GRU architecture** to tackle both spatial and temporal dependencies in traffic data:
- **1D CNN:** Extracts local spatial features from interconnected traffic sensors rapidly.
- **Stacked GRU:** Tracks the continuous temporal variations and long-term physics of traffic patterns.

## 🛠 Features
- **Cyclical Time Embeddings:** Converts time-of-day and day-of-week into continuous sine/cosine patterns.
- **Sliding Window Technique:** Maps sequences of 12 timestamps (1 full hour) to accurately predict the next steps.
- **Optimized Training:** Implements learning rate scheduling (`ReduceLROnPlateau`) and a custom `EarlyStopping` mechanism for high-efficiency training.

## 📊 Results on PEMS-BAY
- **R² Score:** 0.633
- **MAE:** 2.348
- **RMSE:** 4.213

## 💻 Tech Stack
- **Deep Learning Framework:** PyTorch
- **Data Engineering:** Pandas, NumPy, Scikit-Learn
- **Visualization:** Matplotlib
- **Web Portfolio:** HTML5, CSS3, JS (Google Material Design UI)

## 🚦 How to Run Locally
1. Clone the repo
2. Create virtual environment `python -m venv .venv` and activate it.
3. Install dependencies: `pip install pandas numpy matplotlib torch scikit-learn`
4. Run `python traffic_prediction (2).py`

*Built by Shyngys Narseyit*
