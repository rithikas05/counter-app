import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return(
        <div style={styles.card}>
            <h2 style = {styles.title}>Counter App</h2>
            <p style={styles.count}>{count}</p>
            <div style={styles.buttonGroup}>
            <button onClick={increase} style={{...styles.button, backgroundColor:"#4CAF50" }}>➕ Increase</button>{" "}
            <button onClick={decrease} style={{...styles.button, backgroundColor: "#f44336"}}>➖ Decrease</button>{" "}
            <button onClick={reset} style={{...styles.button,backgroundColor: "#2196f3"}}>🔁 Reset</button>
        
        </div>
        </div>
    );

}
const styles ={
    
    card:{
        background: "linear-gradient(to bottom right, #ffffff, #f0f0f0)",
        padding: "70px 30px",
        borderRadius: "20px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        textAlign: "center",
        width: "500px",
        transition: "transform 0.3s ease",
    },
    title: {
       marginBottom: "20px",
       color: "#333",
       fontWeight: "bold",
       fontSize: "32px",
       letterSpacing: "1px",
    },
    count: {
        fontSize:"50px",
        fontWeight: "bold",
        color:"#222",
        marginBottom: "25px",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
    },
    button: {
        flex: "1",
        padding: "12px",
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
    }
};


export default Counter;