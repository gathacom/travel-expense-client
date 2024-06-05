import React, { useState } from "react";
import EditExpenseForm from "./EditExpenseForm";
import CreateExpenseForm from "./CreateExpenseForm";
import EditTripForm from "./EditTripForm";
import { destroyTrip } from "@/services/tripService";
import { destroyExpense } from "@/services/expenseService";

const TripList = ({ trips }) => {
  return (
    <div>
      {trips.map((trip) => (
        <TripItem key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

const TripItem = ({ trip }) => {
  const [modalAddExpenseVisible, setModalAddExpenseVisible] = useState(false);
  const [modalEditTripVisible, setModalEditTripVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDeleteTrip = async () => {
    try {
      await destroyTrip(trip.id, (success, response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Success : Trip deleted successfully");
        } else {
          alert("Errors : Failed to delete trip");
        }
      });
    } catch (error) {
      throw error;
    }
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      handleDeleteTrip();
    }
  };

  return (
    <>
      <div style={styles.tripItem}>
        <div onClick={toggleExpand} style={styles.tripHeader}>
          <div style={styles.tripTitle}>{trip.title}</div>
          <div>{trip.description}</div>
          <div>Created At: {trip.createdAt}</div>
          <div>Updated At: {trip.updatedAt}</div>
          <div className="text-primary font-bold text-lg">
            Expanses: {trip.expenses.length}
          </div>
        </div>
        <div
          style={{ ...styles.expenseList, maxHeight: expanded ? "500px" : "0" }}
        >
          {expanded && <ExpenseList expenses={trip.expenses} tripId={trip.id} />}
        </div>
        <div style={styles.buttonContainer}>
          <button
            className="bg-primary"
            style={styles.button}
            onClick={() => setModalAddExpenseVisible(true)}
          >
            Add New Expense
          </button>
          <button
            className="bg-primary"
            style={styles.button}
            onClick={() => setModalEditTripVisible(true)}
          >
            Edit Trip
          </button>
          <button className="bg-danger" onClick={confirmDelete} style={styles.button}>
            Delete Trip
          </button>
        </div>
      </div>
      <EditTripForm
        visible={modalEditTripVisible}
        onClose={() => setModalEditTripVisible(false)}
        tripId={trip.id}
      />
      <CreateExpenseForm
        visible={modalAddExpenseVisible}
        onClose={() => setModalAddExpenseVisible(false)}
        tripId={trip.id}
      />
    </>
  );
};

const ExpenseList = ({ expenses, tripId }) => {
  const [modalEditExpenseVisible, setModalEditExpenseVisible] = useState(false);
  const expenseId = expenses[0]?.id;

  const confirmDeleteExpense = () => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      handleDeleteExpense();
    }
  };

  const handleDeleteExpense = async () => {
    try {
      await destroyExpense(
        tripId,
        expenseId,
        (success, response) => {
          if (response.status === 200) {
            alert("Success : Expense deleted successfully");
          } else {
            alert("Error : Failed to delete expense");
          }
        }
      );
    } catch (error) {
      Alert.alert("Error", error.message);
      console.log(error);
    }
  };
  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id} style={styles.expenseItem}>
          <div style={styles.expenseTitle}>{expense.title}</div>
          <div className="" style={styles.buttonContainer}>
            <button
              className="bg-secondary"
              style={styles.smallButton}
              onClick={() => setModalEditExpenseVisible(true)}
              >
              Edit Expense
            </button>
            <button className="bg-danger" style={styles.smallButton} onClick={confirmDeleteExpense}>
              Delete Expense
            </button>
          </div>
          <div>{expense.description}</div>
          <div>Amount: {expense.amount}</div>
          <div>Created At: {expense.createdAt}</div>
          <div>Updated At: {expense.updatedAt}</div>
        </div>
      ))}
      <EditExpenseForm
        visible={modalEditExpenseVisible}
        onClose={() => setModalEditExpenseVisible(false)}
        tripId={tripId}
        expenseId={expenseId}
        />
    </div>
  );
};

const styles = {
  tripItem: {
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  },
  tripHeader: {
    cursor: "pointer",
    padding: "10px",
    borderBottom: "2px solid #03aec6",
  },
  tripTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "5px",
  },
  expenseList: {
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  },
  expenseItem: {
    marginLeft: "20px",
    marginTop: "10px",
    borderBottom: "1px solid #01294d",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  expenseTitle: {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "5px",
  },
  buttonContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    transition: "background-color 0.3s ease-in-out",
  },
  smallButton: {
    marginLeft: "5px",
    padding: "5px 7px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    transition: "background-color 0.3s ease-in-out",
  },
};

export default TripList;
