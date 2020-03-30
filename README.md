# parse-user-cli
Parse User CLI

## Environment Variables

|Name|Description|Example|
|----|-----------|-------|
|SERVER_URL|Parse Server URL|http://localhost:1337/api|
|APPLICATION_ID|Parse Application ID|1234567890|
|JAVASCRIPT_KEY|Parse JavaScript Key|0987654321|
|MASTER_KEY|Parse Master Key|0987654321|

Example:
```bash
docker run -rm \
-e SERVER_URL=http://localhost:1337/api \
-e APPLICATION_ID=1234567890 \
-e JAVASCRIPT_KEY=0987654321 \
-e MASTER_KEY=0987654321 \
atton16/parse-user-cli \
list
```

## Usage
1. Add user
```
docker run -rm atton16/parse-user-cli add <username> <password>
```
2. Set password
```
docker run -rm atton16/parse-user-cli set-password <username> <password>
```
3. List user
```
docker run -rm atton16/parse-user-cli list
```

# License
MIT License

Copyright (c) 2020 Attawit Kittikrairit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
