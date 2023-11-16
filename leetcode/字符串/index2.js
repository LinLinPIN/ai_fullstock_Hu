let str='12345'
function inPalindrome(s,i,j){
    while(i<j){
        if(s[i]==s[j])
        i++,j--;
    else break
    }
    if(i>=j)return true;
    return inPalindrome(s,i,j-1)||inPalindrome(s,i+1,j)
}

