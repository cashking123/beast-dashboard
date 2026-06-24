const DAILY_DATA = {
  "daily": {
    "date": "2026-06-23",
    "revenue": {
      "yesterday": 4108.83,
      "day_before": 7585.62,
      "delta": -0.4583,
      "avg7": 6883.43,
      "avg30": 5973.45
    },
    "register": {
      "yesterday": 360,
      "day_before": 364,
      "delta": -0.011,
      "avg7": 260,
      "avg30": 297
    },
    "new_payers": {
      "yesterday": 44,
      "day_before": 40,
      "delta": 0.1,
      "avg7": 42,
      "avg30": 52
    },
    "new_pay_rate": {
      "yesterday": 0.1222,
      "day_before": 0.1099,
      "delta": 0.0123,
      "avg7": 0.1668,
      "avg30": 0.208
    },
    "summary": "营收异常(-45.8%)；注册正常(-1.1%)；新增付费正常(+10.0%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 1143.54
      },
      {
        "name": "聚冠_JUR",
        "val": 1043.83
      },
      {
        "name": "精聊發發發团队",
        "val": 280.75
      },
      {
        "name": "厄洛斯",
        "val": 274.6
      },
      {
        "name": "李航",
        "val": 263.63
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 47
      },
      {
        "name": "聚冠_JUR",
        "val": 46
      },
      {
        "name": "郑州未界发财_JUR",
        "val": 28
      },
      {
        "name": "殿堂网络_JUR",
        "val": 28
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 27
      }
    ],
    "anomaly_channels": [
      {
        "name": "厄洛斯",
        "yest": 274.6,
        "before": 1230.55,
        "delta": -0.7768,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1062.78,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 713.96,
          "big_r_names": "Slays: $462→$0(-$462), Caulk: $359→$0(-$359), cmdr.14021678: $274→$48(-$226)",
          "churn_names": "DMOGKarmaX, hueS, JunNyx"
        }
      },
      {
        "name": "在水一方_JUR",
        "yest": 193.83,
        "before": 733.52,
        "delta": -0.7358,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 536.71,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "MoeLester: $555→$100(-$455), dutchie: $31→$3(-$28), cmdr.22008939: $24→$0(-$24)",
          "churn_names": "无"
        }
      },
      {
        "name": "李航",
        "yest": 263.63,
        "before": 848.98,
        "delta": -0.6895,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 485.3,
          "big_r_churn": 0,
          "reg_drop": 83.69,
          "quality_drop": 4.18,
          "big_r_names": "LightRuler: $299→$77(-$222), Danno: $199→$6(-$193), Sugar: $50→$0(-$50)",
          "churn_names": "无"
        }
      },
      {
        "name": "梵克雅宝",
        "yest": 1143.54,
        "before": 2725.49,
        "delta": -0.5804,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 2113.7,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Temizuchi: $897→$0(-$897), Weiii05: $800→$0(-$800), cmdr.23008558: $765→$500(-$265)",
          "churn_names": "南辞"
        }
      },
      {
        "name": "雅典娜",
        "yest": 116.8,
        "before": 188.89,
        "delta": -0.3817,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 99.99,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 210.24,
          "big_r_names": "cmdr.23005794: $100→$0(-$100)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "克罗心SX",
        "yest": 11,
        "before": 20,
        "delta": -0.45,
        "reason": "量跌"
      },
      {
        "name": "西安玩趣发财_JUR",
        "yest": 8,
        "before": 14,
        "delta": -0.4286,
        "reason": "量跌"
      },
      {
        "name": "卡地亚巨兽",
        "yest": 8,
        "before": 11,
        "delta": -0.2727,
        "reason": "量跌"
      },
      {
        "name": "李航",
        "yest": 16,
        "before": 21,
        "delta": -0.2381,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "DMOGKarmaX",
        "ucid": "16020026003381",
        "channel": "厄洛斯",
        "server": "S26",
        "total_pay": 735.77,
        "last_login_days": 3
      },
      {
        "name": "cmdr.25003234",
        "ucid": "16020025003234",
        "channel": "郑州未界发财_JUR",
        "server": "S25",
        "total_pay": 930.38,
        "last_login_days": 5
      },
      {
        "name": "南辞",
        "ucid": "16020024009938",
        "channel": "梵克雅宝",
        "server": "S24",
        "total_pay": 1077.95,
        "last_login_days": 4
      },
      {
        "name": "Prince",
        "ucid": "16020022007549",
        "channel": "发财团队_JUR",
        "server": "S22",
        "total_pay": 782.92,
        "last_login_days": 3
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4465.52,
        "last_login_days": 6
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 6
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
        "name": "RedGen",
        "ucid": "16020015005434",
        "channel": "郑州未界发财_JUR",
        "server": "S15",
        "total_pay": 885.85,
        "last_login_days": 6
      },
      {
        "name": "JunNyx",
        "ucid": "16020015004499",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 8564.41,
        "last_login_days": 4
      },
      {
        "name": "Doggy",
        "ucid": "16020015004467",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 761.78,
        "last_login_days": 6
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 958.98,
        "before": 109.97,
        "delta": 7.7204,
        "days": 188
      },
      {
        "name": "S12",
        "yest": 4.99,
        "before": 258.47,
        "delta": -0.9807,
        "days": 168
      },
      {
        "name": "S13",
        "yest": 0.0,
        "before": 461.94,
        "delta": -1.0,
        "days": 154
      },
      {
        "name": "S14",
        "yest": 75.92,
        "before": 667.77,
        "delta": -0.8863,
        "days": 120
      },
      {
        "name": "S15",
        "yest": 0.99,
        "before": 4.99,
        "delta": -0.8016,
        "days": 92
      },
      {
        "name": "S16",
        "yest": 111.84,
        "before": 78.9,
        "delta": 0.4175,
        "days": 78
      },
      {
        "name": "S17",
        "yest": 26.93,
        "before": 254.82,
        "delta": -0.8943,
        "days": 71
      },
      {
        "name": "S18",
        "yest": 23.95,
        "before": 106.27,
        "delta": -0.7746,
        "days": 64
      },
      {
        "name": "S19",
        "yest": 41.94,
        "before": 51.06,
        "delta": -0.1786,
        "days": 57
      },
      {
        "name": "S20",
        "yest": 172.69,
        "before": 569.55,
        "delta": -0.6968,
        "days": 50
      },
      {
        "name": "S21",
        "yest": 22.94,
        "before": 85.87,
        "delta": -0.7329,
        "days": 43
      },
      {
        "name": "S22",
        "yest": 29.92,
        "before": 64.83,
        "delta": -0.5385,
        "days": 36
      },
      {
        "name": "S23",
        "yest": 865.83,
        "before": 1840.08,
        "delta": -0.5295,
        "days": 29
      },
      {
        "name": "S24",
        "yest": 260.59,
        "before": 332.75,
        "delta": -0.2169,
        "days": 22
      },
      {
        "name": "S25",
        "yest": 641.25,
        "before": 2120.4,
        "delta": -0.6976,
        "days": 15
      },
      {
        "name": "S26",
        "yest": 497.72,
        "before": 577.95,
        "delta": -0.1388,
        "days": 8
      },
      {
        "name": "S27",
        "yest": 372.35,
        "before": 0.0,
        "delta": 0.0,
        "days": 1
      }
    ]
  }
};
