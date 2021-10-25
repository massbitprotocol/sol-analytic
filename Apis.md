## Block apis
Use jsonrpc with entrypoint: http://staging.massbit.io:9090/jsonrpc
1. Block list: Get list block infos
- method: "block_list"
- Parameters: offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "block_list", "params": [10, 20], "id":1 }
```
- Default order by block Timestamp
- Output example:
```
{
  "jsonrpc": "2.0",
  "result": [
      {
          "block_hash": "BN5E9jZtnD4ysfntrJgbnAeeafERyYrVaJUEyUvdKRbS",
          "block_slot": 103368992,
          "leader": "74theNPM1xGD5Pk54vV8hyBKF8Fqs1BgzTceGmcYVxiW",
          "parent_slot": 103368991,
          "previous_block_hash": "7DYU1KzKqcSLLev2d6RQmjkops4iUD5hBCz1wPeZV4Lr",
          "reward": 7417500,
          "timestamp": 1635134171,
          "transaction_number": 2951
      }
  ],
  "id": 1
}  
```
  Note: currently this api is missing offset parameter

2. Block detail: Get detail info of a block (Currently block info doesn't have must data)
- method: "block_detail",
- Parameters:  block_slot: number
```
{"jsonrpc": "2.0", "method": "block_detail", "params": [102564336], "id":1 }
```
- Output example:
```
{
    "jsonrpc": "2.0",
    "result": {
        "block_hash": "614PjjZVPgz7GUcP25XvJ7iSZjtJKPiZH6mBgRgsAWK6",
        "block_slot": 102564336,
        "leader": "3B2mGaZoFwzAnWCoZ4EAKdps4FbYbDKQ48jo8u1XWynU",
        "parent_slot": 102564335,
        "previous_block_hash": "KUknPUrBhnidnFqZrpStFUiXJiK11R1D3fqLwLAvYmq",
        "reward": 4832500,
        "timestamp": 1634739306,
        "transaction_number": 1922
    },
    "id": 1
}
```

3. Block statistic: Get statistic data of blocks by date in form of unixtimestamp. Order by date decreasing
- method: "block_statistic",
- Parameters:  offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "block_statistic", "params": [0, 100], "id":1 }
```
- Output example:
```
{
    "jsonrpc": "2.0",
    "result": [
        {
            "average_block_time": 492,
            "block_counter": 1138,
            "date": 1633910400,
            "fist_block_time": 1633996228,
            "id": 1,
            "last_block_time": 1633996799,
            "max_block_slot": 100988160,
            "min_block_slot": 100987001,
            "network": "mainnet",
            "success_tx": 1294165,
            "total_fee": 6525390000,
            "total_reward": 3695940000,
            "total_tx": 1466200
        }
   ],
   "id": 1,
 }
```

##  Transaction apis
1. Transaction List: Get common list transaction, order by fist_block_time
- Method: "txns_list"
- Parameters: offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "txns_list", "params": [0, 100], "id":1 }
```
- Output example:
```
{
    "jsonrpc": "2.0",
    "result": {
        "headers": [
            "block_slot",
            "timestamp",
            "signature",
            "signers",
            "instructions",
            "fee",
            "status"
        ],
        "values": [
            [
                103372205,
                1635135679,
                "2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4",
                "CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq",
                [
                    "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"
                ],
                5000,
                "1"
            ]
        ]
    },
    "id": 1
}
```
2. Transaction list by block: Get list transaction included within a block
- Method: "txns_block"
- Parameters: block_slot: number, offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "txns_block", "params": [102149431, 0, 100], "id":1 }
```
- Output: same as output of api transaction list
3. Transaction list by address: get list transactions related to an address
- Method: "txns_address"
- Parameters: address: text, before_address: text(optional), limit: number
```
{"jsonrpc": "2.0", "method": "txns_address", "params": ["tDw82DpNQwC4sUqRt5zCihm1N9ktta51ZyXbWewMsWp", null, 100], "id":1 }
or
{"jsonrpc": "2.0", "method": "txns_address", "params": ["tDw82DpNQwC4sUqRt5zCihm1N9ktta51ZyXbWewMsWp", "oETvTjKHyT3EHnycHV86k4xfTv2gWUSVTmQxkbLkxCkYyEtzPwTrMXva1BfPHYvZzKSkpxKobG2Sw3vJ3PcCEee", 100], "id":1 }
```
- Output: same as output of api transaction list
4. Transaction detail
- Method: "txns_detail"
- Parameters: tx_hash: text
```
{"jsonrpc": "2.0", "method": "txns_detail", "params": ["d6xppvVr3hRgSSQsWm3tcTVV5wwj6d8T7qe7aD3XhB3pZUMDpE14nRVC8o2p3fAzE32yghksmqfNAtbicJrNGp9"], "id":1 }
```
- output
```
{
    "jsonrpc": "2.0",
    "result": {
        "block_time": 1634780008,
        "fee": 5000,
        "instructions": [
            {
                "accounts": [
                    "2qBnzsndJhXrcNyKi9EP2pC17YaTcJh9Z3rZ5BwzzKbq",
                    "4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu",
                    "3z4M5C3hkwsCgz2n7mnJZX6uHweQAtMijTsWxFrYtZHD",
                    "4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu",
                    "4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu"
                ],
                "data": "12VeXEUfH",
                "programId": "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"
            },
            {
                "parsed": {
                    "info": {
                        "destination": "31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy",
                        "lamports": 2427,
                        "source": "31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy"
                    },
                    "type": "transfer"
                },
                "program": "system",
                "programId": "11111111111111111111111111111111"
            }
        ],
        "logs": [
            "Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin invoke [1]",
            "Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin consumed 3652 of 200000 compute units",
            "Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin success",
            "Program 11111111111111111111111111111111 invoke [1]",
            "Program 11111111111111111111111111111111 success"
        ],
        "recent_blockhash": "6k9mspmCyiosxYgTtGCnGQ8kgkcafqMq1M76JBB8ACTq",
        "signature": "d6xppvVr3hRgSSQsWm3tcTVV5wwj6d8T7qe7aD3XhB3pZUMDpE14nRVC8o2p3fAzE32yghksmqfNAtbicJrNGp9",
        "signer": "31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy",
        "slot": 102648785,
        "status": "1"
    },
    "id": 1
}
```
