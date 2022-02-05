function palindrome(str) {
  let processedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(processedStr);
  const isPalindrome = (st) => {
    console.log(st);
    if (st.length === 1) {
      return true;
    }
    if(st.length === 2) {
      return st.charAt(0) === st.charAt(1);
    }
    let check = st.charAt(0) === st.charAt(st.length - 1);

    return check && isPalindrome(st.slice(1,st.length - 1));
  };
  
  return isPalindrome(processedStr);
}

palindrome("_eye");
