const DAILY_DATA = {
  "daily": {
    "date": "2026-07-02",
    "revenue": {
      "yesterday": 10672.77,
      "day_before": 8656.62,
      "delta": 0.2329,
      "avg7": 7728.01,
      "avg30": 6463.45
    },
    "register": {
      "yesterday": 313,
      "day_before": 313,
      "delta": 0.0,
      "avg7": 272,
      "avg30": 301
    },
    "new_payers": {
      "yesterday": 56,
      "day_before": 52,
      "delta": 0.0769,
      "avg7": 45,
      "avg30": 50
    },
    "new_pay_rate": {
      "yesterday": 0.1789,
      "day_before": 0.1661,
      "delta": 0.0128,
      "avg7": 0.2153,
      "avg30": 0.1947
    },
    "summary": "营收异常(+23.3%)；注册正常(+0.0%)；新增付费正常(+7.7%)",
    "channel_rev": [
      {
        "name": "聚冠_JUR",
        "val": 3401.29
      },
      {
        "name": "梵克雅宝",
        "val": 1141.32
      },
      {
        "name": "厄洛斯",
        "val": 1010.68
      },
      {
        "name": "精聊發發發团队",
        "val": 761.82
      },
      {
        "name": "巴黎世家2",
        "val": 658.76
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 43
      },
      {
        "name": "聚冠_JUR",
        "val": 34
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 26
      },
      {
        "name": "西安玩趣发财_JUR",
        "val": 25
      },
      {
        "name": "德玛西亚",
        "val": 21
      }
    ],
    "anomaly_channels": [
      {
        "name": "潘多拉",
        "yest": 139.82,
        "before": 354.65,
        "delta": -0.6058,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 46.0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 489.37,
          "big_r_names": "Goodamac: $96→$50(-$46)",
          "churn_names": "无"
        }
      },
      {
        "name": "香奈儿GD",
        "yest": 118.83,
        "before": 236.82,
        "delta": -0.4982,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "无",
          "churn_names": "无"
        }
      },
      {
        "name": "在水一方_JUR",
        "yest": 319.61,
        "before": 551.47,
        "delta": -0.4204,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 177.81,
          "big_r_churn": 0,
          "reg_drop": 568.2,
          "quality_drop": 0,
          "big_r_names": "FastFlipz: $107→$0(-$107), MoeLester: $184→$129(-$55), Viking: $21→$5(-$16)",
          "churn_names": "cmdr.22008939, h3llgamer"
        }
      },
      {
        "name": "李航",
        "yest": 152.79,
        "before": 232.7,
        "delta": -0.3434,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 118.87,
          "big_r_churn": 0,
          "reg_drop": 22.92,
          "quality_drop": 0,
          "big_r_names": "Danno: $57→$0(-$57), LightRuler: $40→$0(-$40), cmdr.18010175: $62→$40(-$22)",
          "churn_names": "无"
        }
      },
      {
        "name": "厄洛斯",
        "yest": 1010.68,
        "before": 1493.64,
        "delta": -0.3233,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 906.91,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Caulk: $830→$109(-$721), Habaek: $164→$60(-$104), cmdr.14021678: $108→$44(-$64)",
          "churn_names": "Mera, hueS, SolarX"
        }
      },
      {
        "name": "雅典娜",
        "yest": 535.69,
        "before": 715.48,
        "delta": -0.2513,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 163.91,
          "big_r_churn": 0,
          "reg_drop": 33.48,
          "quality_drop": 0,
          "big_r_names": "Toaster: $301→$149(-$152), Pancake: $11→$0(-$11), cmdr.22005544: $1→$0(-$1)",
          "churn_names": "无"
        }
      },
      {
        "name": "精聊發發發团队",
        "yest": 761.82,
        "before": 973.7,
        "delta": -0.2176,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 156.01,
          "big_r_churn": 0,
          "reg_drop": 190.46,
          "quality_drop": 0,
          "big_r_names": "onsenegg: $816→$660(-$156)",
          "churn_names": "无"
        }
      },
      {
        "name": "郑州未界发财_JUR",
        "yest": 118.82,
        "before": 139.88,
        "delta": -0.1506,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 43.01,
          "big_r_churn": 0,
          "reg_drop": 26.4,
          "quality_drop": 330.06,
          "big_r_names": "chriisss89: $50→$7(-$43)",
          "churn_names": "SirRat"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "君临天下",
        "yest": 5,
        "before": 13,
        "delta": -0.6154,
        "reason": "量跌"
      },
      {
        "name": "精聊發發發团队",
        "yest": 15,
        "before": 20,
        "delta": -0.25,
        "reason": "量跌"
      },
      {
        "name": "梵克雅宝",
        "yest": 43,
        "before": 51,
        "delta": -0.1569,
        "reason": "量跌"
      },
      {
        "name": "李航",
        "yest": 17,
        "before": 20,
        "delta": -0.15,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "cmdr.22008939",
        "ucid": "16020022008939",
        "channel": "在水一方_JUR",
        "server": "S22",
        "total_pay": 1255.78,
        "last_login_days": 5
      },
      {
        "name": "h3llgamer",
        "ucid": "16020022003421",
        "channel": "在水一方_JUR",
        "server": "S22",
        "total_pay": 3189.87,
        "last_login_days": 3
      },
      {
        "name": "Morb",
        "ucid": "16020017010825",
        "channel": "广州昊天游_JUR",
        "server": "S17",
        "total_pay": 1677.9,
        "last_login_days": 3
      },
      {
        "name": "Mera",
        "ucid": "16020017003411",
        "channel": "厄洛斯",
        "server": "S17",
        "total_pay": 588.45,
        "last_login_days": 6
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 3
      },
      {
        "name": "cmdr.15006332",
        "ucid": "16020015006332",
        "channel": "发财团队_JUR",
        "server": "S15",
        "total_pay": 2105.74,
        "last_login_days": 3
      },
      {
        "name": "SirRat",
        "ucid": "16020015004289",
        "channel": "郑州未界发财_JUR",
        "server": "S15",
        "total_pay": 2593.47,
        "last_login_days": 3
      },
      {
        "name": "Jeeves",
        "ucid": "16020015004228",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 824.02,
        "last_login_days": 3
      },
      {
        "name": "ATK",
        "ucid": "16020015003106",
        "channel": "发财团队_JUR",
        "server": "S15",
        "total_pay": 1037.55,
        "last_login_days": 5
      },
      {
        "name": "SolarX",
        "ucid": "16020014010963",
        "channel": "厄洛斯",
        "server": "S14",
        "total_pay": 678.49,
        "last_login_days": 4
      },
      {
        "name": "Astari",
        "ucid": "16020011011574",
        "channel": "聚冠_JUR",
        "server": "S11",
        "total_pay": 1453.75,
        "last_login_days": 5
      },
      {
        "name": "Bubble",
        "ucid": "16020011009575",
        "channel": "聚冠_JUR",
        "server": "S11",
        "total_pay": 15771.86,
        "last_login_days": 3
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 1027.74,
        "before": 44.97,
        "delta": 21.8539,
        "days": 197
      },
      {
        "name": "S12",
        "yest": 219.96,
        "before": 29.97,
        "delta": 6.3393,
        "days": 177
      },
      {
        "name": "S13",
        "yest": 64.98,
        "before": 152.86,
        "delta": -0.5749,
        "days": 163
      },
      {
        "name": "S14",
        "yest": 285.79,
        "before": 955.86,
        "delta": -0.701,
        "days": 129
      },
      {
        "name": "S15",
        "yest": 276.82,
        "before": 14.98,
        "delta": 17.4793,
        "days": 101
      },
      {
        "name": "S16",
        "yest": 104.97,
        "before": 110.91,
        "delta": -0.0536,
        "days": 87
      },
      {
        "name": "S17",
        "yest": 45.94,
        "before": 155.87,
        "delta": -0.7053,
        "days": 80
      },
      {
        "name": "S18",
        "yest": 69.94,
        "before": 103.83,
        "delta": -0.3264,
        "days": 73
      },
      {
        "name": "S19",
        "yest": 11.97,
        "before": 71.94,
        "delta": -0.8336,
        "days": 66
      },
      {
        "name": "S20",
        "yest": 474.92,
        "before": 415.67,
        "delta": 0.1425,
        "days": 59
      },
      {
        "name": "S21",
        "yest": 259.96,
        "before": 90.94,
        "delta": 1.8586,
        "days": 52
      },
      {
        "name": "S22",
        "yest": 312.81,
        "before": 31.93,
        "delta": 8.7967,
        "days": 45
      },
      {
        "name": "S23",
        "yest": 548.79,
        "before": 408.79,
        "delta": 0.3425,
        "days": 38
      },
      {
        "name": "S24",
        "yest": 1108.69,
        "before": 1766.62,
        "delta": -0.3724,
        "days": 31
      },
      {
        "name": "S25",
        "yest": 1594.49,
        "before": 1310.37,
        "delta": 0.2168,
        "days": 24
      },
      {
        "name": "S26",
        "yest": 2103.5,
        "before": 698.56,
        "delta": 2.0112,
        "days": 17
      },
      {
        "name": "S27",
        "yest": 1613.97,
        "before": 1306.96,
        "delta": 0.2349,
        "days": 10
      },
      {
        "name": "S28",
        "yest": 478.81,
        "before": 819.7,
        "delta": -0.4159,
        "days": 4
      },
      {
        "name": "S29",
        "yest": 62.74,
        "before": 0.0,
        "delta": 0.0,
        "days": 1
      }
    ]
  }
};
