python3.14 -m uvicorn main:app --reload --host 127.0.0.1 --port 8000


    #ProxyRequests off
    #ProxyPass /api http://127.0.0.1:8000/api
    #ProxyPassReverse /api http://127.0.0.1:8000/api
    #ProxyPreserveHost On