import React, { useEffect, useRef, useState } from "react";

function Count(props) {
  /**
   * đầu tiên component render lần đầu tiên với count = 0 và countRef = 0
   *
   * khi xảy ra onClick, thì component bị re-render lại và count tăng lên 1, lúc này
   * useEffect chưa chạy tới nên count = 1 và countRef = 0, quá trình useEffect chạy xong
   * countRef được cập nhật lại giá trị là 1
   */

  //Todo: quá trình chạy của 1 component với useEffect

  // 1
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // 3
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleIncCount = () => {
    setCount((x) => x + 1);
  };

  // 2
  return (
    <div>
      <p>Count: {count}</p>
      <p>Count REF: {countRef.current}</p>

      <button onClick={handleIncCount}>INC</button>
    </div>
  );
}

export default Count;
