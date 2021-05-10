etwas mit
sum((
        //expense[@person = //person[@name="Gioele"]/@id][lower-case(@currency) = 'eur' or not(@currency)]/@value,
        //expense[@person = //person[@name="Gioele"]/@id][lower-case(@currency) = 'usd']/(@value * 0.9)
)) + //user[id]