/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[]
    const len =s.length
    const map={'{':'}',
                '[':']',
                '(':')'
        }
    for(let i=0;i<len;i++){
        if(map.hasOwnProperty(s[i]))
        {stack.push(s[i])
        }
    else{
        let temp=stack.pop();
        if(temp==undefined||map[temp]!=s[i])
            {return false
            }
    }
    }
    return !stack.length
};