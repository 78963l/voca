import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function DeleteDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    function delDay() {
        fetch(`http://localhost:3001/days/${days.length}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            if (res.ok) {
                alert("삭제가 완료 되었습니다.");
                navigate(`/`);
            }
        });
    }
    return (
        <div>
            {console.log(`${days.length}`)}
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={delDay}>Day 삭제</button>
        </div>
    );
}
