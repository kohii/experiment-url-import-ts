import { format } from 'https://esm.sh/date-fns@2.29.2'; // this type declaration is not a valid module. so it should be ok we have an error
import { toByteArray } from "https://esm.sh/base64-js@1.5.1";
import { add } from './add'

format(new Date(), 'yyyy-MM-dd')
toByteArray('aGVsbG8gd29ybGQ=')
add(1, 2)