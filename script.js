function translateText() {
    const input = document.getElementById("translateInput").value;
    const result = document.getElementById("translateResult");

    const dictionary = {
        "안녕하세요": "你好",
        "감사합니다": "谢谢",
        "사랑해요": "我爱你",
        "학교": "学校",
        "도서관": "图书馆"
    };

    result.innerText = dictionary[input] || "번역 결과가 없습니다.";
}

function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDate = document.getElementById("taskDate").value;

    if (!taskName || !taskDate) {
        alert("과제명과 날짜를 입력하세요.");
        return;
    }

    const li = document.createElement("li");
    li.innerText = `${taskName} - ${taskDate}`;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
}

function chatBot() {
    const question = document.getElementById("chatInput").value;
    const result = document.getElementById("chatResult");

    if (question.includes("도서관")) {
        result.innerText = "학교 홈페이지에서 운영 시간을 확인해 보세요.";
    } else if (question.includes("병원")) {
        result.innerText = "가까운 대학병원을 이용하는 것을 추천합니다.";
    } else if (question.includes("지하철")) {
        result.innerText = "카카오맵 또는 네이버지도를 이용해 보세요.";
    } else {
        result.innerText = "질문해 주셔서 감사합니다. 추가 정보는 학교 행정실에 문의해 주세요.";
    }
}
