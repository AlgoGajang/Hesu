function solution(array, commands) {
    let result = [];
    commands.forEach((arr) =>{
        let newArr = array.slice(arr[0]-1,arr[1]).sort((a,b) => a-b);
        result.push(newArr[arr[2]-1]);
    })
    return result;
}

// 여러븐 안녕하세요. 어제 어떻게 할지 정해지지 않았지만 우선 깃 업로드 했습니다.
// 룰 정해지면 수정할 부분 수정하겠습니다. (파일명 등등)
// 케이스 2번  = 정렬