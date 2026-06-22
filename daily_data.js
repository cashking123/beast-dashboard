const DAILY_DATA = {
  "daily": {
    "date": "2026-06-21",
    "revenue": {
      "yesterday": 3921.23,
      "day_before": 5680.49,
      "delta": -0.3097,
      "avg7": 6998.36,
      "avg30": 5952.82
    },
    "register": {
      "yesterday": 137,
      "day_before": 129,
      "delta": 0.062,
      "avg7": 240,
      "avg30": 300
    },
    "new_payers": {
      "yesterday": 25,
      "day_before": 20,
      "delta": 0.25,
      "avg7": 44,
      "avg30": 54
    },
    "new_pay_rate": {
      "yesterday": 0.1825,
      "day_before": 0.155,
      "delta": 0.0274,
      "avg7": 0.2197,
      "avg30": 0.2131
    },
    "summary": "营收异常(-31.0%)；注册正常(+6.2%)；新增付费异常(+25.0%)",
    "channel_rev": [
      {
        "name": "聚冠_JUR",
        "val": 1082.8
      },
      {
        "name": "厄洛斯",
        "val": 788.97
      },
      {
        "name": "李航",
        "val": 338.52
      },
      {
        "name": "殿堂网络_JUR",
        "val": 324.5
      },
      {
        "name": "在水一方_JUR",
        "val": 272.16
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 32
      },
      {
        "name": "弑神阁",
        "val": 22
      },
      {
        "name": "殿堂网络_JUR",
        "val": 22
      },
      {
        "name": "长沙万氪_JUR",
        "val": 14
      },
      {
        "name": "厄洛斯",
        "val": 10
      }
    ],
    "anomaly_channels": [
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 106.7,
        "before": 324.69,
        "delta": -0.6714,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 265.95,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Sleepy: $230→$0(-$230), Caleb1437: $35→$0(-$35), McLovin81: $1→$0(-$1)",
          "churn_names": "无"
        }
      },
      {
        "name": "梵克雅宝",
        "yest": 162.78,
        "before": 482.32,
        "delta": -0.6625,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 165.94,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "speroth: $100→$0(-$100), cmdr.22003632: $53→$5(-$48), cmdr.23003218: $30→$12(-$18)",
          "churn_names": "无"
        }
      },
      {
        "name": "李航",
        "yest": 338.52,
        "before": 726.47,
        "delta": -0.534,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 520.8,
          "big_r_churn": 0,
          "reg_drop": 253.89,
          "quality_drop": 0,
          "big_r_names": "Sugar: $315→$0(-$315), cmdr.18010175: $143→$47(-$96), Danno: $88→$1(-$87)",
          "churn_names": "无"
        }
      },
      {
        "name": "厄洛斯",
        "yest": 788.97,
        "before": 1283.55,
        "delta": -0.3853,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 796.82,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.14021678: $412→$9(-$403), Slays: $295→$0(-$295), JunNyx: $34→$0(-$34)",
          "churn_names": "roborex, Putte, cmdr.18010155, hueS, SolarX"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "郑州未界发财_JUR",
        "yest": 5,
        "before": 11,
        "delta": -0.5455,
        "reason": "量跌"
      },
      {
        "name": "香奈儿GD",
        "yest": 6,
        "before": 11,
        "delta": -0.4545,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "cmdr.25003234",
        "ucid": "16020025003234",
        "channel": "郑州未界发财_JUR",
        "server": "S25",
        "total_pay": 930.38,
        "last_login_days": 3
      },
      {
        "name": "roborex",
        "ucid": "16020020003969",
        "channel": "厄洛斯",
        "server": "S20",
        "total_pay": 943.96,
        "last_login_days": 6
      },
      {
        "name": "Putte",
        "ucid": "16020019005265",
        "channel": "厄洛斯",
        "server": "S19",
        "total_pay": 615.46,
        "last_login_days": 4
      },
      {
        "name": "CeeJay",
        "ucid": "16020019003309",
        "channel": "天津简游发财_JUR",
        "server": "S19",
        "total_pay": 2247.33,
        "last_login_days": 6
      },
      {
        "name": "cmdr.18010155",
        "ucid": "16020018010155",
        "channel": "厄洛斯",
        "server": "S18",
        "total_pay": 500.96,
        "last_login_days": 4
      },
      {
        "name": "Shade0",
        "ucid": "16020017007033",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 1635.3,
        "last_login_days": 5
      },
      {
        "name": "cmdr.17005950",
        "ucid": "16020017005950",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 906.65,
        "last_login_days": 5
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4465.52,
        "last_login_days": 4
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 4
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
        "name": "Doggy",
        "ucid": "16020015004467",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 761.78,
        "last_login_days": 4
      },
      {
        "name": "Jeeves",
        "ucid": "16020015004228",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 824.02,
        "last_login_days": 5
      },
      {
        "name": "SolarX",
        "ucid": "16020014010963",
        "channel": "厄洛斯",
        "server": "S14",
        "total_pay": 678.49,
        "last_login_days": 5
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 964.96,
        "before": 13.98,
        "delta": 68.0243,
        "days": 186
      },
      {
        "name": "S12",
        "yest": 0.0,
        "before": 774.96,
        "delta": -1.0,
        "days": 166
      },
      {
        "name": "S13",
        "yest": 0.0,
        "before": 339.93,
        "delta": -1.0,
        "days": 152
      },
      {
        "name": "S14",
        "yest": 299.39,
        "before": 631.33,
        "delta": -0.5258,
        "days": 118
      },
      {
        "name": "S15",
        "yest": 109.97,
        "before": 133.96,
        "delta": -0.1791,
        "days": 90
      },
      {
        "name": "S16",
        "yest": 53.84,
        "before": 64.91,
        "delta": -0.1705,
        "days": 76
      },
      {
        "name": "S17",
        "yest": 5.98,
        "before": 280.43,
        "delta": -0.9787,
        "days": 69
      },
      {
        "name": "S18",
        "yest": 46.93,
        "before": 177.81,
        "delta": -0.7361,
        "days": 62
      },
      {
        "name": "S19",
        "yest": 0.0,
        "before": 22.95,
        "delta": -1.0,
        "days": 55
      },
      {
        "name": "S20",
        "yest": 188.83,
        "before": 149.25,
        "delta": 0.2652,
        "days": 48
      },
      {
        "name": "S21",
        "yest": 201.75,
        "before": 64.9,
        "delta": 2.1086,
        "days": 41
      },
      {
        "name": "S22",
        "yest": 78.83,
        "before": 379.54,
        "delta": -0.7923,
        "days": 34
      },
      {
        "name": "S23",
        "yest": 331.51,
        "before": 401.29,
        "delta": -0.1739,
        "days": 27
      },
      {
        "name": "S24",
        "yest": 169.21,
        "before": 265.74,
        "delta": -0.3632,
        "days": 20
      },
      {
        "name": "S25",
        "yest": 354.46,
        "before": 1401.42,
        "delta": -0.7471,
        "days": 13
      },
      {
        "name": "S26",
        "yest": 1105.59,
        "before": 570.12,
        "delta": 0.9392,
        "days": 6
      }
    ]
  }
};
