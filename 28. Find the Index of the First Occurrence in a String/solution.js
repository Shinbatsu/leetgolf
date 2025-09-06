strStr=(h,n)=>n?[...h].findIndex((_,i)=>h.slice(i,i+n.length)==n):0

strStr=(h,n)=>n?h.search(n):0