const DAILY_DATA = {
  "daily": {
    "date": "2026-06-17",
    "revenue": {
      "yesterday": 6950.01,
      "day_before": 8639.43,
      "delta": -0.1955,
      "avg7": 7199.23,
      "avg30": 5584.32
    },
    "register": {
      "yesterday": 265,
      "day_before": 347,
      "delta": -0.2363,
      "avg7": 324,
      "avg30": 311
    },
    "new_payers": {
      "yesterday": 44,
      "day_before": 70,
      "delta": -0.3714,
      "avg7": 59,
      "avg30": 56
    },
    "new_pay_rate": {
      "yesterday": 0.166,
      "day_before": 0.2017,
      "delta": -0.0357,
      "avg7": 0.2203,
      "avg30": 0.2125
    },
    "summary": "营收异常(-19.6%)；注册异常(-23.6%)；新增付费异常(-37.1%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 906.42
      },
      {
        "name": "聚冠_JUR",
        "val": 905.45
      },
      {
        "name": "厄洛斯",
        "val": 741.89
      },
      {
        "name": "西安玩趣发财_JUR",
        "val": 712.91
      },
      {
        "name": "在水一方_JUR",
        "val": 601.51
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 41
      },
      {
        "name": "殿堂网络_JUR",
        "val": 23
      },
      {
        "name": "李航",
        "val": 21
      },
      {
        "name": "聚冠_JUR",
        "val": 19
      },
      {
        "name": "弑神阁",
        "val": 18
      }
    ],
    "anomaly_channels": [
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 224.76,
        "before": 590.12,
        "delta": -0.6191,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 78.94,
          "big_r_churn": 0,
          "reg_drop": 77.8,
          "quality_drop": 34.58,
          "big_r_names": "cmdr.21005887: $77→$0(-$77), McLovin81: $2→$0(-$2)",
          "churn_names": "无"
        }
      },
      {
        "name": "李航",
        "yest": 317.4,
        "before": 796.64,
        "delta": -0.6016,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 400.29,
          "big_r_churn": 0,
          "reg_drop": 198.38,
          "quality_drop": 1071.23,
          "big_r_names": "Sugar: $397→$0(-$397), cmdr.18010175: $32→$30(-$2), cmdr.24003293: $1→$0(-$1)",
          "churn_names": "Jaws"
        }
      },
      {
        "name": "潘多拉",
        "yest": 237.61,
        "before": 511.65,
        "delta": -0.5356,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 333.96,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Goodamac: $465→$131(-$334)",
          "churn_names": "无"
        }
      },
      {
        "name": "厄洛斯",
        "yest": 741.89,
        "before": 1542.45,
        "delta": -0.519,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1040.23,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Slays: $456→$0(-$456), cmdr.14003240: $204→$0(-$204), Tairax: $183→$0(-$183)",
          "churn_names": "无"
        }
      },
      {
        "name": "梵克雅宝",
        "yest": 906.42,
        "before": 1800.0,
        "delta": -0.4964,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1443.34,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 6744.83,
          "big_r_names": "cmdr.23008558: $475→$0(-$475), speroth: $278→$0(-$278), cmdr.23003218: $289→$14(-$275)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "精聊發發發团队",
        "yest": 5,
        "before": 16,
        "delta": -0.6875,
        "reason": "量跌"
      },
      {
        "name": "香奈儿GD",
        "yest": 9,
        "before": 17,
        "delta": -0.4706,
        "reason": "量跌"
      },
      {
        "name": "雅典娜",
        "yest": 12,
        "before": 22,
        "delta": -0.4545,
        "reason": "量跌"
      },
      {
        "name": "西安玩趣发财_JUR",
        "yest": 5,
        "before": 9,
        "delta": -0.4444,
        "reason": "量跌"
      },
      {
        "name": "厄洛斯",
        "yest": 14,
        "before": 25,
        "delta": -0.44,
        "reason": "量跌"
      },
      {
        "name": "聚冠_JUR",
        "yest": 19,
        "before": 33,
        "delta": -0.4242,
        "reason": "量跌"
      },
      {
        "name": "郑州未界发财_JUR",
        "yest": 15,
        "before": 25,
        "delta": -0.4,
        "reason": "量跌"
      },
      {
        "name": "laoxia_JUR",
        "yest": 5,
        "before": 8,
        "delta": -0.375,
        "reason": "量跌"
      },
      {
        "name": "克罗心SX",
        "yest": 12,
        "before": 17,
        "delta": -0.2941,
        "reason": "量跌"
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 10,
        "before": 13,
        "delta": -0.2308,
        "reason": "量跌"
      },
      {
        "name": "长沙万氪_JUR",
        "yest": 7,
        "before": 9,
        "delta": -0.2222,
        "reason": "量跌"
      },
      {
        "name": "弑神阁",
        "yest": 18,
        "before": 22,
        "delta": -0.1818,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "21Epic",
        "ucid": "16020021003323",
        "channel": "长沙哈迪斯_JUR",
        "server": "S21",
        "total_pay": 702.46,
        "last_login_days": 5
      },
      {
        "name": "Jaws",
        "ucid": "16020019005492",
        "channel": "李航",
        "server": "S19",
        "total_pay": 1317.48,
        "last_login_days": 3
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4085.53,
        "last_login_days": 6
      },
      {
        "name": "Anakin",
        "ucid": "16020016011136",
        "channel": "天津简游发财_JUR",
        "server": "S16",
        "total_pay": 1409.07,
        "last_login_days": 5
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 5
      },
      {
        "name": "cmdr.16005137",
        "ucid": "16020016005137",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 560.83,
        "last_login_days": 3
      },
      {
        "name": "Colera",
        "ucid": "16020015010527",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 1041.23,
        "last_login_days": 6
      },
      {
        "name": "RedGen",
        "ucid": "16020015005434",
        "channel": "郑州未界发财_JUR",
        "server": "S15",
        "total_pay": 885.85,
        "last_login_days": 3
      },
      {
        "name": "cmdr.14003231",
        "ucid": "16020014003231",
        "channel": "聚冠_JUR",
        "server": "S14",
        "total_pay": 1272.17,
        "last_login_days": 5
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 8.99,
        "before": 232.9,
        "delta": -0.9614,
        "days": 182
      },
      {
        "name": "S12",
        "yest": 189.99,
        "before": 45.95,
        "delta": 3.1347,
        "days": 162
      },
      {
        "name": "S13",
        "yest": 0.99,
        "before": 648.82,
        "delta": -0.9985,
        "days": 148
      },
      {
        "name": "S14",
        "yest": 388.84,
        "before": 343.32,
        "delta": 0.1326,
        "days": 114
      },
      {
        "name": "S15",
        "yest": 199.98,
        "before": 18.95,
        "delta": 9.553,
        "days": 86
      },
      {
        "name": "S16",
        "yest": 105.84,
        "before": 32.93,
        "delta": 2.2141,
        "days": 72
      },
      {
        "name": "S17",
        "yest": 750.94,
        "before": 300.98,
        "delta": 1.495,
        "days": 65
      },
      {
        "name": "S18",
        "yest": 258.0,
        "before": 177.82,
        "delta": 0.4509,
        "days": 58
      },
      {
        "name": "S19",
        "yest": 34.98,
        "before": 329.68,
        "delta": -0.8939,
        "days": 51
      },
      {
        "name": "S20",
        "yest": 299.8,
        "before": 519.51,
        "delta": -0.4229,
        "days": 44
      },
      {
        "name": "S21",
        "yest": 521.85,
        "before": 532.71,
        "delta": -0.0204,
        "days": 37
      },
      {
        "name": "S22",
        "yest": 328.97,
        "before": 260.64,
        "delta": 0.2622,
        "days": 30
      },
      {
        "name": "S23",
        "yest": 547.67,
        "before": 1702.79,
        "delta": -0.6784,
        "days": 23
      },
      {
        "name": "S24",
        "yest": 731.73,
        "before": 1371.81,
        "delta": -0.4666,
        "days": 16
      },
      {
        "name": "S25",
        "yest": 1988.49,
        "before": 1521.81,
        "delta": 0.3067,
        "days": 9
      },
      {
        "name": "S26",
        "yest": 592.95,
        "before": 588.83,
        "delta": 0.007,
        "days": 2
      }
    ]
  }
};
