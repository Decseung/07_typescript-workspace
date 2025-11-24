export {}

/*
  const [ count, setCount ] = useState(0); // [ 초기상태값, 상태변경용함수 ]

  const [ value, setValue ] = useState(''); 
*/

function useState<T>(initialState: T): [ T, (newState: T) => void ] {
  // ... 상태관련코드 

  return [ initialState, (newState) => {
    // 상태업데이트로직
  } ]
}

const [ count, setCount ] = useState<number>(0);

interface User {
  id: number;
  name: string;
  age: number
}

const [user, setUser] = useState<User | null>(null);

/*
useEffect(() => {
   // 데이터 페칭
   setUser(조회된데이터(User객체))
}, [])
*/