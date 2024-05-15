const mockData = {
  followers: 1500,
  posts: 50,
  engagementRate: "3.5%",
  analytics: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Sample data for analytics chart
};

// Update the HTML elements with the mock data
document.getElementById("follower-count").textContent = mockData.followers;
document.getElementById("post-count").textContent = mockData.posts;
document.getElementById("engagement-rate").textContent =
  mockData.engagementRate;

// draw the analytics chart using Chart.js
const ctx = document.getElementById("analytics-chart").getContext("2d");
const analyticsChart = new Chart(ctx, {
  type: "line", // chart type : line chart
  data: {
    labels: [
      // X-axis labels (months)
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      // data for the chart
      {
        label: "Analytics", // label
        data: mockData.analytics, // data points from mockdata for the data set
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Background color of the line
        borderColor: "rgba(54, 162, 235, 1)", // Border color of the line
        borderWidth: 1, // width of the line border
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
