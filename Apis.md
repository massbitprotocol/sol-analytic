## Block apis
Use jsonrpc with entrypoint: http://staging.massbit.io:9090/jsonrpc
1. Block list: Get list block infos
- method: "getBlockList"
- Parameters: offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "getBlockList", "params": [10, 20], "id":1 }
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
- method: "getBlockDetail",
- Parameters:  block_slot: number
```
{"jsonrpc": "2.0", "method": "getBlockDetail", "params": [102564336], "id":1 }
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
- method: "getBlockStatistic",
- Parameters:  offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "getBlockStatistic", "params": [0, 100], "id":1 }
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
- Method: "getTransactionList"
- Parameters: offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "getTransactionList", "params": [0, 100], "id":1 }
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
- Method: "getTransactionByBlock"
- Parameters: block_slot: number, offset: number, limit: number
```
{"jsonrpc": "2.0", "method": "getTransactionByBlock", "params": [102149431, 0, 100], "id":1 }
```
- Output: same as output of api transaction list
3. Transaction list by address: get list transactions related to an address
- Method: "getTransactionByAddress"
- Parameters: address: text, before_address: text(optional), limit: number
```
{"jsonrpc": "2.0", "method": "getTransactionByAddress", "params": ["tDw82DpNQwC4sUqRt5zCihm1N9ktta51ZyXbWewMsWp", null, 100], "id":1 }
or
{"jsonrpc": "2.0", "method": "getTransactionByAddress", "params": ["tDw82DpNQwC4sUqRt5zCihm1N9ktta51ZyXbWewMsWp", "oETvTjKHyT3EHnycHV86k4xfTv2gWUSVTmQxkbLkxCkYyEtzPwTrMXva1BfPHYvZzKSkpxKobG2Sw3vJ3PcCEee", 100], "id":1 }
```
- Output: same as output of api transaction list
4. Transaction detail
- Method: "getTransactionDetail"
- Parameters: tx_hash: text
```
{"jsonrpc": "2.0", "method": "getTransactionDetail", "params": ["d6xppvVr3hRgSSQsWm3tcTVV5wwj6d8T7qe7aD3XhB3pZUMDpE14nRVC8o2p3fAzE32yghksmqfNAtbicJrNGp9"], "id":1 }
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

**5. Get account info**
- Method: "getAccountInfo"
- Parameters:
```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": [
    "ACCOUNT_ADDRESS",
    "jsonParsed"
  ]
}
```
### General account
- Call
```json
  {
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": [
    "AQYXcjg1ttjfnVA7VUi1qNnePNKjCZo53M8VfvaT9Eq9",
    "jsonParsed"
  ]
}
```
- Return
```json
{
  "jsonrpc": "2.0",
  "result": {
    "accountType": "Account",
    "context": {
      "slot": 103579499
    },
    "value": {
      "data": [
        "",
        "base64"
      ],
      "executable": false,
      "lamports": 11430470,
      "owner": "11111111111111111111111111111111",
      "rentEpoch": 239
    }
  },
  "id": 1
}
```

### Program account
- Link
https://solscan.io/account/SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ/
- Call
```json
{"jsonrpc": "2.0", "method": "getAccountInfo", "params": ["SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ","jsonParsed"], "id":1 }
```
- Return
```json
{
    "jsonrpc": "2.0",
    "result": {
      "accountType": "ProgramAccount",
        "context": {
            "slot": 103553847
        },
        "value": {
            "data": {
                "parsed": {
                    "info": {
                        "programData": "54aePuBcYcf8G3CDrWWd2MEiw6Q7UGy2kjgQBDhqoMdt"
                    },
                    "type": "program"
                },
                "program": "bpf-upgradeable-loader",
                "space": 36
            },
            "executable": true,
            "lamports": 1141440,
            "owner": "BPFLoaderUpgradeab1e11111111111111111111111",
            "rentEpoch": 185
        }
    },
    "id": 1
}
```

### Token account
- Call
```json
  {
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": [
    "2C82bL2X7y5PwbsnxMQjAQW7CC8dcqtrh4ZyGAd5NBpZ",
    "jsonParsed"
  ]
}
```
- Return
```json
{
  "jsonrpc": "2.0",
  "result": {
    "accountType": "TokenAccount",
    "context": {
      "slot": 103580015
    },
    "value": {
      "data": {
        "parsed": {
          "info": {
            "isNative": false,
            "mint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "owner": "AQYXcjg1ttjfnVA7VUi1qNnePNKjCZo53M8VfvaT9Eq9",
            "state": "initialized",
            "tokenAmount": {
              "amount": "0",
              "decimals": 6,
              "uiAmount": 0,
              "uiAmountString": "0"
            }
          },
          "type": "account"
        },
        "program": "spl-token",
        "space": 165
      },
      "executable": false,
      "lamports": 2039280,
      "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "rentEpoch": 239
    }
  },
  "id": 1
}
```

### Mint account
- Call
```json
  {
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": [
    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "jsonParsed"
  ]
}
```
- Return
```json
{
  "jsonrpc": "2.0",
  "result": {
    "accountType": "MintAccount",
    "context": {
      "slot": 103580291
    },
    "value": {
      "data": {
        "parsed": {
          "info": {
            "decimals": 6,
            "freezeAuthority": "3sNBr7kMccME5D55xNgsmYpZnzPgP2g12CixAajXypn6",
            "isInitialized": true,
            "mintAuthority": "2wmVCSfPxGPjrnMMn7rchp4uaeoTqN39mXFC2zhPdri9",
            "supply": "2485000019865882"
          },
          "type": "mint"
        },
        "program": "spl-token",
        "space": 82
      },
      "executable": false,
      "lamports": 76771211333,
      "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "rentEpoch": 239
    }
  },
  "id": 1
}
```
### Invalid account address
- Response
```json
{
    "jsonrpc": "2.0",
    "error": {
        "code": -32602,
        "message": "ClientError { request: Some(GetAccountInfo), kind: RpcError(RpcResponseError { code: -32602, message: \"Invalid param: WrongSize\", data: Empty }) }"
    },
    "id": 1
}
```

### Notes:
    - Use the `accountType` field in `result` for determine the account type.
    - There are 4 account types: `ProgramAccount`, `Account`, `TokenAccount` and `MintAccount`