<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Quiz Platform</h2>
  <p>Answer Key for staff</p><br/>
  <table border="1">
    <tr bgcolor="orange">
      <th style="text-align:left; text-color:black">Question</th>
      <th style="text-align:left">Answer</th>
    </tr>
    <xsl:for-each select="quiz/items/item">
    <tr>
      <td><xsl:value-of select="question"/></td>
      <td><xsl:value-of select="answer"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
