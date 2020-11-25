<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Users</h2>
  <table border="1">
    <tr bgcolor="orange">
      <th style="text-align:left">UID</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Total Quizes</th>
    </tr>
    <xsl:for-each select="profiles/user">
    <tr>
      <td><xsl:value-of select="uid"/></td>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="totalquizes"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
