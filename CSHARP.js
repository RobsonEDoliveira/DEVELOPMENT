# TESTE COM LOG NO DESKTOP

string userPathx = Environment.GetFolderPath(Environment.SpecialFolder.Desktop) + "\\";
string nomeArquivo = userPathx + DateTime.Now.ToString("yyyyMMddHHmmss") + ".txt";
StreamWriter writer = new StreamWriter(nomeArquivo);

writer.WriteLine("1 _user - " + _user);

writer.Close();
______________________________________________________________________________________________________________
# PEGAR CAMINHO DA PASTA DO USUÁRIO DE REDE
string userPath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
string ramal = "";

# Lê todas as linhas do arquivo.
string[] lines = System.IO.File.ReadAllLines(userPath + @"\AppData\local\3CXVoipPhone.ini");

            //Percorre a lista de linhas do arquivo.
            for (int i = 0; i < lines.Length; i++)
            {
                //Gera as colunas da linha atual com base no separador ","
                string[] sDados = lines[i].Split(',');

                //Checa se há dados para atribuir a coluna 1.
                if (sDados.Length > 0)
                {
                    string sColunaName = sDados[0];

                    if (sColunaName.Length > 6 && sColunaName.Contains("Name="))
                    {
                        ramal = sColunaName.Replace("Name=", "");
                        break;
                    }
                }
            }
______________________________________________________________________________________________________________
# SOMENTE NÚMERO 

string alvo = "---1245dsee845xs+-875";
string result = Regex.Replace(alvo, @"[^\d]", "");
______________________________________________________________________________________________________________
# FECHAR PROCESSO
 
Process[] runingProcess = Process.GetProcesses();
            for (int i = 0; i < runingProcess.Length; i++)
            {
                if (runingProcess[i].ProcessName.Contains("3CXPhone"))
                    runingProcess[i].Kill();
            }
______________________________________________________________________________________________________________
# AUTOITX

AUTOITX

AutoItX.MouseClick("LEFT", 80, 16, 2, -1);

// Wow, this is C#!
AutoItX.Run("notepad.exe", "", AutoItX.SW_SHOW);
AutoItX.WinWaitActive("Untitled");
AutoItX.Send("I'm in notepad{Enter}{Enter}");
AutoItX.Send("From AutoItX in C{#}{Enter}{Enter}");
AutoItX.Send("From C{#} in AutoIt through .NET Framework{Enter}");
Thread.Sleep(5000);
IntPtr winHandle = AutoItX.WinGetHandle("Untitled");
AutoItX.WinKill(winHandle);

Send("{ALT down}{F4 down}{F4 up}{ALT up}")
Send("{AltDown}{Enter}{AltUp}")

^ = ctrl
! = alt
AutoItX.Send("{ALT}{ASC 117}");  ALT + U
AutoItX.Send("^c", 0);
ctext = AutoItX.ClipGet().Trim();

-- testar 
SendWait("^c");
Send("{CTRL}C");
AutoItX.Run("notepad.exe", "", AutoItX.SW_SHOW);
AutoItX.WinWaitActive("Untitled");
-- combo box
Send("{TAB 3}")  ; Sends a Tab button 3 times
Sleep(500)       ; Because send goes throuhg within milliseconds, add a sleep so it doesnt act as fast.
Send("{DOWN 5}") ; Sends a Down Arrow 5 times
Send("{ENTER}")


sNomeJanela = "Digite o ramal e a senha";
AutoItX.WinWait(sNomeJanela, "", 20);
AutoItX.WinActivate(sNomeJanela, "");

Thread.Sleep(1500);
AutoItX.Send(sSenhaTratada3CX + "{ENTER}");
AutoItX.Send("^{ENTER}"); 


-- PARA COPIAR DE UM COMPONENTE, PRECISO SETAR O NOME DA JANELA, E COLOCAR A CLASSE E INSTANCIA REFERENTE
string TESTE = AutoItX.ControlGetText("Integrador", "", "[CLASS:WindowsForms10.STATIC.app.0.13965fa_r7_ad1; INSTANCE:2]");

COPIAR  (Ramal é nome da janela)
string copiarTexto = AutoItX.ControlGetText("Integrador", "", "[CLASS:WindowsForms10.STATIC.app.0.13965fa_r7_ad1; INSTANCE:2]").Replace("Código: ", "");

COLAR
AutoItX.ControlSend("Ramal:", "", "[CLASSNN:WindowsForms10.EDIT.app.0.378734a1]", copiarTexto);

CLICAR
AutoItX.ControlClick("Ramal:", "", "[Name:btLogin]");

ALT + A
AutoItX.Send("{ALT}{ASC 97}");
https://documentacao.senior.com.br/tecnologia/6.2.35/view/tabelaascii.htm

COPIAR
AutoItX.Send("^c", 0);
ctext = AutoItX.ClipGet().Trim();

// Clica no botão avançar
Thread.Sleep(1500);
AutoItX.Send("{ALT}{ASC 97}");

CTRL + ENTER
AutoItX.Send(sSenhaTratada3CX + "{ENTER}");
AutoItX.Send("^{ENTER}"); 


https://www.tecmundo.com.br/software/237426-google-chrome-veja-lista-atalhos-atualizada-windows.htm

REMOVER ESPAÇO
var urlSplit = _user.Split('/');
string usurario = urlSplit[0].ToString().Trim();
string comboTexto = Regex.Replace(urlSplit[1], @"\s", "").ToUpper();

NOVA ABA
sendKeys(Keys.CONTROL +"t");

// open in default browser
Process.Start("http://www.stackoverflow.net");

// open in Internet Explorer
Process.Start("iexplore", @"http://www.stackoverflow.net/");

// open in Firefox
Process.Start("firefox", @"http://www.stackoverflow.net/");

// open in Google Chrome
Process.Start("chrome", @"http://www.stackoverflow.net/");

Process.Start(@"%AppData%\..\Local\Google\Chrome\Application\chrome.exe", "http:\\www.YourUrl.com");

# COPIAR URL DO NAVEGADOR

AutoItX.ClipPut(""); // Esvazia a variável do Autoit
AutoItX.Sleep(1000);
AutoItX.Send("!d"); //ALT+D para selecionar O ENDEREÇO DA url
AutoItX.Sleep(1000);
AutoItX.Send("^c"); //CTRL+C - copia o texto selecionado
AutoItX.Sleep(1000);
sUrl = AutoItX.ClipGet(); //copy clipboard to vari
______________________________________________________________________________________________________________
# LER DENTRO DE ARQUIVO

            string ramal = "";
            string userPath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            string[] linhas = System.IO.File.ReadAllLines(userPath + @"\AppData\local\3CX VoIP Phone\3CXVoipPhone.ini");

            for (int i = 0; i < linhas.Length; i++)
            {
                string[] sDados = linhas[i].Split(',');

                if (sDados.Length > 0)
                {
                    string sColunaName = sDados[0];

                    if (sColunaName.Length > 6 && sColunaName.Contains("Name="))
                    {
                        ramal = sColunaName.Replace("Name=", "");
                        break;
                    }
                }
            } 
______________________________________________________________________________________________________________
# LIMPAR CACHE NAVEGADOR GOOGLE CHROME

 private void LimparContasNavegador()
        {
            string rootDrive = Path.GetPathRoot(Environment.SystemDirectory);
            string userName = Environment.UserName;

            try
            {
                Process[] Path1 = Process.GetProcessesByName("chrome");
                foreach (Process p in Path1)
                {
                    try
                    {
                        p.Kill();
                    }
                    catch { }
                    p.WaitForExit();
                    p.Dispose();
                }

                System.IO.DirectoryInfo downloadedMessageInfo = new DirectoryInfo(rootDrive + "Users\\" + userName + "\\AppData\\Local\\Google\\Chrome\\User Data");

                try
                {
                    foreach (FileInfo file in downloadedMessageInfo.GetFiles())
                        file.Delete();
                }
                catch { }

                try
                {
                    foreach (DirectoryInfo dir in downloadedMessageInfo.GetDirectories())
                        dir.Delete(true);
                }
                catch { }
            }
            catch { }
        }
______________________________________________________________________________________________________________
# PEGAR APENAS O NOME DO SITE

string UrlSemWWW = url.Replace("www.", "");
string sUrl = UrlSemWWW.Substring(0, UrlSemWWW.IndexOf('.')).Replace("https://", "").Replace("http://", "");
______________________________________________________________________________________________________________