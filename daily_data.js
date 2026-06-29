const DAILY_DATA = {
  "daily": {
    "date": "2026-06-28",
    "revenue": {
      "yesterday": 4366.35,
      "day_before": 9472.93,
      "delta": -0.5391,
      "avg7": 6679.5,
      "avg30": 6332.27
    },
    "register": {
      "yesterday": 41,
      "day_before": 239,
      "delta": -0.8285,
      "avg7": 294,
      "avg30": 299
    },
    "new_payers": {
      "yesterday": 29,
      "day_before": 41,
      "delta": -0.2927,
      "avg7": 42,
      "avg30": 51
    },
    "new_pay_rate": {
      "yesterday": 0.7073,
      "day_before": 0.1715,
      "delta": 0.5358,
      "avg7": 0.1491,
      "avg30": 0.1944
    },
    "summary": "营收异常(-53.9%)；注册异常(-82.8%)；新增付费异常(-29.3%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 738.52
      },
      {
        "name": "聚冠_JUR",
        "val": 698.41
      },
      {
        "name": "在水一方_JUR",
        "val": 674.61
      },
      {
        "name": "厄洛斯",
        "val": 616.27
      },
      {
        "name": "李航",
        "val": 252.71
      }
    ],
    "channel_reg_top5": [
      {
        "name": "在水一方_JUR",
        "val": 10
      },
      {
        "name": "聚冠_JUR",
        "val": 6
      },
      {
        "name": "百达翡丽",
        "val": 5
      },
      {
        "name": "李航",
        "val": 4
      },
      {
        "name": "梵克雅宝",
        "val": 4
      }
    ],
    "anomaly_channels": [
      {
        "name": "梵克雅宝",
        "yest": 738.52,
        "before": 3359.03,
        "delta": -0.7801,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 2772.38,
          "big_r_churn": 0,
          "reg_drop": 1495.5,
          "quality_drop": 0,
          "big_r_names": "cmdr.23008558: $2100→$0(-$2100), Zoran: $578→$0(-$578), cmdr.23003218: $92→$25(-$67)",
          "churn_names": "南辞"
        }
      },
      {
        "name": "雅典娜",
        "yest": 201.83,
        "before": 563.51,
        "delta": -0.6418,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 223.82,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Toaster: $205→$65(-$140), cmdr.23005794: $79→$0(-$79), Pancake: $104→$99(-$5)",
          "churn_names": "无"
        }
      },
      {
        "name": "厄洛斯",
        "yest": 616.27,
        "before": 1494.57,
        "delta": -0.5877,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1045.84,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Caulk: $539→$200(-$339), IndiiSkies: $335→$0(-$335), Slays: $285→$0(-$285)",
          "churn_names": "Putte, cmdr.18010155"
        }
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 144.82,
        "before": 270.69,
        "delta": -0.465,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 82.92,
          "big_r_churn": 0,
          "reg_drop": 579.28,
          "quality_drop": 0,
          "big_r_names": "Caleb1437: $40→$0(-$40), Sleepy: $27→$0(-$27), Taybo: $16→$0(-$16)",
          "churn_names": "Meru"
        }
      },
      {
        "name": "巴黎世家2",
        "yest": 172.81,
        "before": 263.67,
        "delta": -0.3446,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 89.87,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.27004536: $263→$173(-$90)",
          "churn_names": "无"
        }
      },
      {
        "name": "李航",
        "yest": 252.71,
        "before": 305.67,
        "delta": -0.1733,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 183.89,
          "big_r_churn": 0,
          "reg_drop": 84.24,
          "quality_drop": 0,
          "big_r_names": "LightRuler: $70→$0(-$70), Danno: $59→$0(-$59), cmdr.18010175: $85→$30(-$55)",
          "churn_names": "Jaws"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "聚冠_JUR",
        "yest": 6,
        "before": 19,
        "delta": -0.6842,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "南辞",
        "ucid": "16020024009938",
        "channel": "梵克雅宝",
        "server": "S24",
        "total_pay": 1077.95,
        "last_login_days": 3
      },
      {
        "name": "Excaliverr",
        "ucid": "16020021009963",
        "channel": "聚冠_JUR",
        "server": "S21",
        "total_pay": 530.54,
        "last_login_days": 3
      },
      {
        "name": "Jaws",
        "ucid": "16020019005492",
        "channel": "李航",
        "server": "S19",
        "total_pay": 1317.48,
        "last_login_days": 5
      },
      {
        "name": "Putte",
        "ucid": "16020019005265",
        "channel": "厄洛斯",
        "server": "S19",
        "total_pay": 615.46,
        "last_login_days": 6
      },
      {
        "name": "CeeJay",
        "ucid": "16020019003309",
        "channel": "天津简游发财_JUR",
        "server": "S19",
        "total_pay": 2247.33,
        "last_login_days": 4
      },
      {
        "name": "cmdr.18010155",
        "ucid": "16020018010155",
        "channel": "厄洛斯",
        "server": "S18",
        "total_pay": 500.96,
        "last_login_days": 5
      },
      {
        "name": "Shade0",
        "ucid": "16020017007033",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 1635.3,
        "last_login_days": 6
      },
      {
        "name": "Anakin",
        "ucid": "16020016011136",
        "channel": "天津简游发财_JUR",
        "server": "S16",
        "total_pay": 1409.07,
        "last_login_days": 4
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 6
      },
      {
        "name": "cmdr.16005137",
        "ucid": "16020016005137",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 560.83,
        "last_login_days": 4
      },
      {
        "name": "Meru",
        "ucid": "16020015017913",
        "channel": "新郑乐牛发财_JUR",
        "server": "S15",
        "total_pay": 720.05,
        "last_login_days": 6
      },
      {
        "name": "RedGen",
        "ucid": "16020015005434",
        "channel": "郑州未界发财_JUR",
        "server": "S15",
        "total_pay": 885.85,
        "last_login_days": 4
      },
      {
        "name": "Doggy",
        "ucid": "16020015004467",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 761.78,
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
        "last_login_days": 5
      },
      {
        "name": "cmdr.11012209",
        "ucid": "16020011012209",
        "channel": "聚冠_JUR",
        "server": "S11",
        "total_pay": 2100.63,
        "last_login_days": 3
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 74.94,
        "before": 85.94,
        "delta": -0.128,
        "days": 193
      },
      {
        "name": "S12",
        "yest": 0.0,
        "before": 70.95,
        "delta": -1.0,
        "days": 173
      },
      {
        "name": "S13",
        "yest": 65.96,
        "before": 315.92,
        "delta": -0.7912,
        "days": 159
      },
      {
        "name": "S14",
        "yest": 277.87,
        "before": 711.81,
        "delta": -0.6096,
        "days": 125
      },
      {
        "name": "S15",
        "yest": 0.0,
        "before": 9.99,
        "delta": -1.0,
        "days": 97
      },
      {
        "name": "S16",
        "yest": 73.91,
        "before": 24.97,
        "delta": 1.96,
        "days": 83
      },
      {
        "name": "S17",
        "yest": 38.98,
        "before": 65.95,
        "delta": -0.4089,
        "days": 76
      },
      {
        "name": "S18",
        "yest": 82.42,
        "before": 94.89,
        "delta": -0.1314,
        "days": 69
      },
      {
        "name": "S19",
        "yest": 9.96,
        "before": 54.95,
        "delta": -0.8187,
        "days": 62
      },
      {
        "name": "S20",
        "yest": 645.79,
        "before": 659.48,
        "delta": -0.0208,
        "days": 55
      },
      {
        "name": "S21",
        "yest": 15.96,
        "before": 129.88,
        "delta": -0.8771,
        "days": 48
      },
      {
        "name": "S22",
        "yest": 245.75,
        "before": 219.11,
        "delta": 0.1216,
        "days": 41
      },
      {
        "name": "S23",
        "yest": 201.84,
        "before": 2542.53,
        "delta": -0.9206,
        "days": 34
      },
      {
        "name": "S24",
        "yest": 699.2,
        "before": 880.38,
        "delta": -0.2058,
        "days": 27
      },
      {
        "name": "S25",
        "yest": 281.69,
        "before": 1568.79,
        "delta": -0.8204,
        "days": 20
      },
      {
        "name": "S26",
        "yest": 703.34,
        "before": 958.06,
        "delta": -0.2659,
        "days": 13
      },
      {
        "name": "S27",
        "yest": 878.78,
        "before": 1079.33,
        "delta": -0.1858,
        "days": 6
      },
      {
        "name": "S28",
        "yest": NaN,
        "before": NaN,
        "delta": 0,
        "days": 0
      }
    ]
  }
};
